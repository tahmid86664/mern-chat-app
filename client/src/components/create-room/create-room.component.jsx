import React from 'react';

import './create-room.style.css';

const CreateRoom = () => {
  return (
    <div className="user__zone__createRoom">
      <form className="user__zone__createRoom__form">
        <input className="user__zone__createRoom__form__input" type="text" placeholder="enter room name..." />
        <button className="user__zone__createRoom__form__button">create room</button>
      </form>
    </div>
  );
}


export default CreateRoom;