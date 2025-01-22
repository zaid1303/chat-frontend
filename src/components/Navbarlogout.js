import React from "react";
import { useNavigate } from "react-router-dom";

const Navbarlogout = () => {
  const navigate = useNavigate();
  return (
    <nav className="p-4 border-bottom">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/chat" className="text-white text-xl font-bold">
          <img src="./logo.avif" className="h-10"></img>
        </a>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("chatHistory");
              window.location.reload();
            }}
            className="text-black hover:text-gray-300 px-3 py-2 border border-black rounded-3xl text-md font-bold mr-3"
          >
            Clear History
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("chatHistory");
              navigate('/');
            }}
            className="text-black hover:text-gray-300 px-3 py-2 border border-black rounded-3xl text-md font-bold"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbarlogout;
