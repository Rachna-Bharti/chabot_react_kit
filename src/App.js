import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './chatbot/config';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import "./App.css";

function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [key, setKey] = useState(0);
  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const closeChat = () => {
    setShowChatbot(false);
  };
  const handleResetChat = () => {
    setKey(prevKey => prevKey + 1); 
  };
  return (
    <div className="App">
      <button 
        onClick={handleToggleChatbot} 
       
        className='hello'
      >
        {showChatbot ? 'X' : '💬'}
      </button>
      
      {showChatbot && (
        <div style={{ display: 'inline-block', backgroundColor: "#f2f6ff", borderRadius: "10px" }}>
          <Chatbot 
           key={key}
            config={config(closeChat, handleResetChat)} 
            actionProvider={ActionProvider} 
            messageParser={MessageParser} 
          />
        </div>
      )}
    </div>
  );
}

export default App;
