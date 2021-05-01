import React from 'react';

import './friend.style.css';

// material ui
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Friend = ({ friendState, name }) => {
  return (
    <div className="user__zone__friend__container">
      <AccountCircleIcon />
      <div className="user__zone__friendInfo">
        <p className="user__zone__friendName">{name}</p>
        <p className="user__zone__friendStatus">
          <span className={friendState === 'online' ? "user__zone__onlineIcon" : "user__zone__offlineIcon"}></span>
          {friendState}
        </p>
      </div>
    </div> 
  );
}


export default Friend;