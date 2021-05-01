import React from 'react';

import './room-panel.style.css';

// component
import Room from '../room/room.component';

const RoomPanel = () => {
  return (
    <div className="user__zone__rooms">
      <Room roomName={'MERN Dev Room'} creator={'Tahmid Khandokar'} />
      <Room roomName={'LAMP Dev Room'} creator={'Shabu Shikdar'} />
      <Room roomName={'MEAN Dev Room'} creator={'Shoaib Ahmed'} />
    </div>
  );
}


export default RoomPanel;