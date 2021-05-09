import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import queryString from 'query-string';
import axios from '../../axios/axios';

import './chat.style.css';

// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { IconButton } from '@material-ui/core';

import { useStateValue } from '../../context/StateProvider';

// components
import Messages from '../messages/messages.component';


// Gneral Focus Hook
const useFocus = () => {
	const htmlElRef = useRef(null)
	const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

	return [ htmlElRef,  setFocus ] 
}


let socket;

const Chat = ({ location }) => {
    const ENDPOINT = 'localhost:9000';
    const [inputRef, setInputFocus] = useFocus(); // for autometically set cursor after submitting input every time
    const [username, setUsername] = useState('');
    const [roomId, setRoomId] = useState('');
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const [{user}] = useStateValue();


    useEffect(() => {
        const {username, roomId, roomName} = queryString.parse(location.search);
        console.log(queryString.parse(location.search));

        socket = io(ENDPOINT, {
            withCredentials: true
        });

        setUsername(username);
        setRoomId(roomId);
        setRoomName(roomName);

        console.log(username, roomId);

        socket.emit('join', {username, roomId}, (err) => {
            if(err) {
                console.log(err);
            }
            axios.get(`/find/messages/${roomId}`).then((res) => {
                setMessages(res.data);
            });
        });


        // unmount
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [location, ENDPOINT]);

    // useEffect(() => {
    //     axios.get(`/find/messages/${roomId}`).then((res) => {
    //         setMessages([...messages, res.data]);
    //     });
    // });

    useEffect(() => {
        socket.on('message', (message, callback) => {
            setMessages([...messages, message]);
        });

    }, [messages]);


    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, roomId, username, () => {
                axios.post('/add/message', {
                    roomId: roomId,
                    senderName: user.name,
                    senderUsername: username,
                    text: message,
                    timestamp: new Date().toLocaleString()
                });

                setMessage('');
            });
        }       
    }

    useEffect(() => {
        setInputFocus(); // for autometically set cursor after submitting input every time
    })

    console.log(messages);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header__left">
                    <div className="chat__header__onlineIcon"></div>
                    <p className="chat__header__roomName">{roomName}</p>
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