import React from 'react';

import './user-zone-header.style.css';

import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

const UserZoneHeader = () => {
  return (
    <div className="user__zone__header">
      <div className="user__zone__searchBar">
        <input type="text" placeholder="Search here..." className="user__zone__searchInput" />
        <IconButton>
          <SearchIcon />
        </IconButton>          
      </div>
      <div className="user__zone__logoutButton">
        Logout
      </div>
    </div>
  );
}

export default UserZoneHeader;