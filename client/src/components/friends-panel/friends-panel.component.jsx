import React from 'react';

import './friends-panel.style.css';

// component
import Friend from '../friend/friend.component';

const FriendsPanel = ({ friendState, user }) => {
  const friends = user.friends;
  
  return (
    <div className="user__zone__friends">
      {friends.length !== 0 ? friends.map(friend => 
          <Friend friendState={friendState} name={friend.name} />
      ) : <div></div> }
    </div>
  );
}


export default FriendsPanel;