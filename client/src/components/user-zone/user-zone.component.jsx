import React, {useState} from 'react'

import './user-zone.style.css';



// components
import UserZoneHeader from '../user-zone-header/user-zone-header.component';
import UserZoneBody from '../user-zone-body/user-zone-body.component';

const UserZone = () => {
    const [userState, setUserState] = useState('online');
    const [friendState, setFriendState] = useState('offline');
    return (
        <div className="user__zone">
            <UserZoneHeader />
            <UserZoneBody 
                userState={userState}
                friendState={friendState}
                setFriendState={setFriendState}
                setUserState={setUserState}
            />
        </div>
    )
}


export default UserZone;
