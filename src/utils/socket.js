import { io, Socket } from 'socket.io-client';
import { BACKEND_URL } from '../config';

const socket = io(BACKEND_URL+':8080', {
  transports: ['websocket'],
  withCredentials: true,
});

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});

export default socket;
