import React, { useEffect, useState } from 'react';

import './user-zone-header.style.css';

import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';
import { useHistory } from 'react-router-dom';

import axios from '../../axios/axios';

import Room from '../room/room.component';

const UserZoneHeader = () => {
  const [user, dispatch] = useStateValue();
  const [allRoom, setAllRoom] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  let history = useHistory();

  const logout = ({event}) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: null
    });

    history.push('/'); // to redirect to home
  }

  useEffect(() => {
    axios.get('/find/allroom').then(res => {
      setAllRoom(res.data);
    });
  });

  const filteredRooms = allRoom.filter(room => 
    room.name.toLowerCase().includes(searchInput.toLowerCase())  
  );

  return (
    <div className="user__zone__header">
      <div className="user__zone__searchBar">
        <input 
          type="text" 
          placeholder="Search here..." 
          className="user__zone__searchInput" 
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <IconButton>
          <SearchIcon />
        </IconButton> 
        <div className={searchInput === '' ? "searchRooms" : "searchRooms active-searchRooms"}>
          {filteredRooms.map(room => 
            <Room key={room._id} id={room._id} roomName={room.name} creator={room.creatorUsername} isFromSearch={true} />  
          )}
        </div>         
      </div>
      <div className="user__zone__logoutButton" onClick={logout}>
        Logout
      </div>
    </div>
  );
}

export default UserZoneHeader;