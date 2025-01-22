import React, { useState, useEffect } from 'react';
import socket from '../utils/socket';
import Navbarlogout from '../components/Navbarlogout';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatHistory')) || []);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on('typing', (isTyping) => {
      setTyping(isTyping);
    });

    return () => {
      socket.off('message');
      socket.off('typing');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === '') return;
    socket.send(message);
    setMessages((prev) => [...prev, `You: ${message}`]);
    setMessage('');
    setTyping(false); 
    socket.emit('typing', false);
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    setTyping(true); 
    socket.emit('typing', true); 
    if(e.target.value==''){
      setTyping(false);
      socket.emit('typing',false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbarlogout />
      <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2 text-md">
            {msg}
          </div>
        ))}
        {typing && <div className="text-md text-gray-500">User is typing...</div>}
      </div>
      <div className="flex items-center p-4 bg-white">
        <input
          type="text"
          value={message}
          onChange={handleTyping}
          placeholder="Type a message"
          className="flex-grow border rounded px-4 py-2"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
