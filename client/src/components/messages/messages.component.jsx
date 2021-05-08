import React, { useEffect, useRef } from 'react';

import './messages.style.css';

import Message from '../message/message.component';

const Messages = ({ messages, username }) => {
  const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

  return (
    <div className="messages">
      {messages.map(message => (
        <Message message={message} username={username} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}


export default Messages;