import React from 'react';

import './search-user.style.css';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const SearchUser = ({ name, username, setSearchInput }) => {

  const sendRequest = () => {
    console.log('sending request');
    setSearchInput('');
  }

  return (
    <div className="search__user">
      <AccountCircleIcon />
      <div className="search__user__userInfo">
        <p className="search__user__name">{name}</p>
        <p className="search__user__username">{username}</p>
        <div className="search__user__buttons">
          <button 
            className="search__user__addButton" 
            type="submit"
            onClick={sendRequest}
          >Send Request</button>
        </div>
      </div>
    </div>
  )
}

export default SearchUser;