import React from 'react';
import { Link } from 'react-router-dom';

import './chat.style.css';

// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { IconButton } from '@material-ui/core';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header__left">
                    <div className="chat__header__onlineIcon"></div>
                    <p className="chat__header__roomName">Room Name</p>
                </div>
                <div className="chat__header__right">
                    <Link to="/join" onClick={() => window.location.href='/'}>
                        {/* this onClick={() => window.location.href='/'} need for page refreshing */}
                        <IconButton>
                            <ExitToAppIcon />
                        </IconButton>
                    </Link>
                </div>
            </div>
            <div className="chat__body">
                <div className="message">
                    <p className="message__senderName">Name</p>
                    <p className="message__body">text</p>
                    <span className="message__timestamp">time demo</span>
                </div>
            </div>
            <div className="chat__footer">
                <form className="chat__footer__inputForm">
                    <input type="text" className="chat__footer__text__input" />
                    <IconButton>
                        <SendOutlinedIcon />
                    </IconButton>
                </form>
            </div>
        </div>
    );
}

export default Chat;