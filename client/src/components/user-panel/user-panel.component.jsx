import React from 'react';

import './user-panel.style.css';

// material ui
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const UserPanel = ({ userState }) => {
  return(
    <div className="user__zone__user">
      <AccountBoxIcon />
      <div className="user__zone__userInfo">
        <p className="user__zone__username">Tahmid Khandokar</p>
        <p className="user__zone__userStatus">
          <span className={`${userState === "online" ? "user__zone__onlineIcon" : "user__zone__offlineIcon"}`}></span>
          {userState}
        </p>
      </div>
    </div>
  );
}


export default UserPanel;