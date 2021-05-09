import React from 'react';

import './message.style.css';

const Message = ({ message: {senderUsername, text}, username }) => {
  let isSentByUser = false;

  if (senderUsername === username) {
    isSentByUser = true;
  }

  console.log(username, senderUsername);
  console.log(isSentByUser);

  return (
    isSentByUser ? (

      <div className="message__container message__sender__container">
        <div className="message">
          <p className="message__senderName message__senderName__right">{username}</p>
          <p className="message__body">{text}</p>
          <span className="message__timestamp message__timestamp__right">time demo</span>
        </div>
      </div>
    ) : (
      <div className="message__container">
        <div className="message">
          <p className="message__senderName">{senderUsername}</p>
          <p className="message__body">{text}</p>
          <span className="message__timestamp">time demo</span>
        </div>
      </div>
    )
  )
}


export default Message;