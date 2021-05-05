import React, { useEffect, useState } from 'react';

import './room-panel.style.css';

// component
import Room from '../room/room.component';
import axios from '../../axios/axios';

import { useStateValue } from '../../context/StateProvider';

const RoomPanel = () => {
  const [{user}] = useStateValue();
  const [createdRooms, setCreatedRooms] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);

  useEffect(() => {
    axios.get(`/find/createdroom/${user.username}`).then(res => {
      setCreatedRooms(res.data);
    });
  });
  

  return (
    <div className="user__zone__rooms">
      {createdRooms ? createdRooms.map(room => 
        <Room key={room._id} id={room._id} roomName={room.name} creator={room.creatorUsername} />
      ) : (<div></div>)
      }
      <br />
      <br />
      {joinedRooms ? joinedRooms.map(room => 
        <Room key={room._id} roomName={room.name} creator={room.creatorUsername} />
      ) : (<div></div>)
      }
      {/* <Room roomName={'MERN Dev Room'} creator={'Tahmid Khandokar'} />
      <Room roomName={'LAMP Dev Room'} creator={'Shabu Shikdar'} />
      <Room roomName={'MEAN Dev Room'} creator={'Shoaib Ahmed'} /> */}
    </div>
  );
}


export default RoomPanel;