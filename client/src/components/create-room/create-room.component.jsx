import React from 'react';
import axios from '../../axios/axios';

import './create-room.style.css';

import { useStateValue } from '../../context/StateProvider';
import { useState } from 'react';

const CreateRoom = () => {
  const [{user}] = useStateValue();
  const [roomNameInput, setRoomNameInput] = useState('');

  const createRoom = (event) => {
    event.preventDefault();

    axios.post('/createroom', {
      id: "123",
      name: roomNameInput,
      creatorName: user.name,
      creatorUsername: user.username,
      members: [],
      messages: []
    });

    setRoomNameInput('');
  }

  return (
    <div className="user__zone__createRoom">
      <form className="user__zone__createRoom__form">
        <input 
          className="user__zone__createRoom__form__input" 
          type="text" 
          placeholder="enter room name..." 
          value={roomNameInput}
          onChange={(event) => setRoomNameInput(event.target.value)}
        />
        <button 
          className="user__zone__createRoom__form__button"
          onClick={createRoom}
        >create room</button>
      </form>
    </div>
  );
}


export default CreateRoom;