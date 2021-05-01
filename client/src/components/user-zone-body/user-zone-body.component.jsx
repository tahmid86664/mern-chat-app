import React from 'react';

import './user-zone-body.style.css';



// components
import UserPanel from '../user-panel/user-panel.component';
import FriendsPanel from '../friends-panel/friends-panel.component';
import CreateRoom from '../create-room/create-room.component';
import RoomPanel from '../room-panel/room-panel.component';

const UserZoneBody = ({ userState, friendState, setUserState, setFriendState }) => {
  return (
    <div className="user__zone__body">
      <div className="user__zone__left">
        <UserPanel userState={userState} />
        <FriendsPanel friendState={friendState} />
      </div>
      <div className="user__zone__right">
        <CreateRoom />
        <RoomPanel />
      </div>
    </div>
  );
}


export default UserZoneBody;