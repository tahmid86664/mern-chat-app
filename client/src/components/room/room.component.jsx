import React from 'react';
import { useHistory } from 'react-router-dom';

import './room.style.css';

// material ui
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { IconButton } from '@material-ui/core';

import axios from '../../axios/axios';

const Room = ({ id, roomName, creator, isFromSearch }) => {
  let history = useHistory();


  const deleteRoom = () => {
    axios.get(`/delete/room/${creator}/${id}`);
  }
  
  const joinRoom = () => {
    console.log('Joining room');
  }

  const enterRoom = () => {
    console.log('entering room');
    history.push(`/chat?username=${creator}&roomId=${id}`);
  }

  return (
    <div className="user__zone__room__container">
      <GroupWorkIcon />
      <div className="user__zone__roomInfo">
        <p className="user__zone__roomName">{roomName}</p>
        <p className="user__zone__roomCreator">Created by {creator}</p>
        <div className="user__zone__roomButtons">
          {!isFromSearch ? (
            <div>
              <IconButton onClick={deleteRoom}>
                <DeleteForeverIcon />
              </IconButton>
              <IconButton className="done__button" onClick={enterRoom} >
                <DoneOutlineIcon />
              </IconButton>
            </div>
          ) : (
            <div>
              <button 
                className="user__zone__joinRoomButton" 
                type="submit"
                onClick={joinRoom}
              >Join</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default Room;