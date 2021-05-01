import React from 'react';

import './friends-panel.style.css';

// component
import Friend from '../friend/friend.component';

const FriendsPanel = ({ friendState }) => {
  return (
    <div className="user__zone__friends">
      <Friend friendState={friendState} name={'Abu Hossain Dabu'} />
      <Friend friendState={friendState} name={'Shabu Shikdar'} />
      <Friend friendState={'online'} name={'Habu Chokidar'} />
    </div>
  );
}


export default FriendsPanel;