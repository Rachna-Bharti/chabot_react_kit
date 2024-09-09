// MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      actions.handleGreet();
    }

   
  };

  return (
    <div>
      {React.Children.map(children, (child) => 
        React.cloneElement(child, {
          parse: parse,
          actions,
        })
      )}
    </div>
  );
};

export default MessageParser;
