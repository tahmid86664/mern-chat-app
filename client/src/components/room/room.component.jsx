import React from 'react';

import './room.style.css';

// material ui
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { IconButton } from '@material-ui/core';

const Room = ({ roomName, creator }) => {
  return (
    <div className="user__zone__room__container">
      <GroupWorkIcon />
      <div className="user__zone__roomInfo">
        <p className="user__zone__roomName">{roomName}</p>
        <p className="user__zone__roomCreator">Created by {creator}</p>
        <div className="user__zone__roomButtons">
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
          <IconButton className="done__button" >
            <DoneOutlineIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}


export default Room;