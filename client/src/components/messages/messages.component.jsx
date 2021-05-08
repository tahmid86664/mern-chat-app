import React from 'react';

import './messages.style.css';

import Message from '../message/message.component';

const Messages = ({ messages, username }) => {
  return (
    <div className="messages">
      {messages.map(message => (
        <Message message={message} username={username} />
      ))}
    </div>
  );
}


export default Messages;