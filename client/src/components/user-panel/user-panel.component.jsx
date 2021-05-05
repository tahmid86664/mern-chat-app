import React from 'react';

import './user-panel.style.css';

// material ui
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const UserPanel = ({ user, userState }) => {
  // console.log(user.user);
  return(
    <div className="user__zone__user">
      <AccountBoxIcon />
      <div className="user__zone__userInfo">
        <p className="user__zone__username">{user.name}</p>
        <p className="user__zone__userStatus">
          <span className={`${user ? "user__zone__onlineIcon" : "user__zone__offlineIcon"}`}></span>
          {userState}
        </p>
      </div>
    </div>
  );
}


export default UserPanel;