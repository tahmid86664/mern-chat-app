import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import queryString from 'query-string';

import './chat.style.css';

// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { IconButton } from '@material-ui/core';

import { useStateValue } from '../../context/StateProvider';

// components
import Messages from '../messages/messages.component';

let socket;

// Gneral Focus Hook
const useFocus = () => {
	const htmlElRef = useRef(null)
	const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

	return [ htmlElRef,  setFocus ] 
}


const Chat = ({ location }) => {
    const ENDPOINT = 'localhost:9000';
    const [inputRef, setInputFocus] = useFocus(); // for autometically set cursor after submitting input every time
    const [username, setUsername] = useState('');
    const [roomId, setRoomId] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');


    useEffect(() => {
        const {username, roomId} = queryString.parse(location.search);
        console.log(queryString.parse(location.search));

        socket = io(ENDPOINT, {
            withCredentials: true
        });

        setUsername(username);
        setRoomId(roomId);

        console.log(username, roomId);

        socket.emit('join', {username, roomId}, (err) => {
            console.log(err);
        });


        // unmount
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [location, ENDPOINT]);

    useEffect(() => {
        socket.on('message', (message, callback) => {
            setMessages([...messages, message]);
        });
    }, [messages]);


    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            console.log(message);
            socket.emit('sendMessage', message, roomId, username, () => {
                setMessage('');
            });
        }
    }

    useEffect(() => {
        setInputFocus();
    })

    console.log(messages);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header__left">
                    <div className="chat__header__onlineIcon"></div>
                    <p className="chat__header__roomName">Room Name</p>
                </div>
                <div className="chat__header__right">
                    <Link to="/zone" >
                        {/* this onClick={() => window.location.href='/'} need for page refreshing */}
                        <IconButton>
                            <ExitToAppIcon />
                        </IconButton>
                    </Link>
                </div>
            </div>
            <div className="chat__body">
                <Messages username={username} messages={messages} />
            </div>
            <div className="chat__footer">
                <form className="chat__footer__inputForm">
                    <input 
                        type="text" 
                        className="chat__footer__text__input" 
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        ref={inputRef} // for autometically set cursor after submitting input every time
                    />
                    <IconButton onClick={sendMessage} >
                        <SendOutlinedIcon />
                    </IconButton>
                </form>
            </div>
        </div>
    );
}

export default Chat;