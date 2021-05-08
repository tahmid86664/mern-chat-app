import React, { useEffect } from 'react';
import { useState } from 'react';

import './user-zone-body.style.css';

// components
import UserPanel from '../user-panel/user-panel.component';
import FriendsPanel from '../friends-panel/friends-panel.component';
import CreateRoom from '../create-room/create-room.component';
import RoomPanel from '../room-panel/room-panel.component';
import { useStateValue } from '../../context/StateProvider';

// socket
// import io from 'socket.io-client';

// let socket;

const UserZoneBody = ({ userState, friendState, setUserState, setFriendState }) => {
  const [{user}, dispatch] = useStateValue();
  const [friendsUsername, setFriendsUsername] = useState([]);
  
  // const ENDPOINT = 'localhost:9000';

  // useEffect(() => {
  //   socket = io(ENDPOINT, {
  //     withCredentials: true
  //   });

  //   socket.emit('zone-in', { user }, (err) => {
  //     console.log(err);
  //   })
  // }, [ENDPOINT, user]);

  return (
    <div className="user__zone__body">
      <div className="user__zone__left">
        <UserPanel userState={userState} user={user} />
        <FriendsPanel friendState={friendState} user={user} />
      </div>
      <div className="user__zone__right">
        <CreateRoom />
        <RoomPanel />
      </div>
    </div>
  );
}


export default UserZoneBody;