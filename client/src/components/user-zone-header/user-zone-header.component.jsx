import React from 'react';

import './user-zone-header.style.css';

import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';
import { useHistory } from 'react-router-dom';

const UserZoneHeader = () => {
  const [user, dispatch] = useStateValue();

  let history = useHistory();

  const logout = ({event}) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: null
    });

    history.push('/'); // to redirect to home
  }

  return (
    <div className="user__zone__header">
      <div className="user__zone__searchBar">
        <input type="text" placeholder="Search here..." className="user__zone__searchInput" />
        <IconButton>
          <SearchIcon />
        </IconButton>          
      </div>
      <div className="user__zone__logoutButton" onClick={logout}>
        Logout
      </div>
    </div>
  );
}

export default UserZoneHeader;