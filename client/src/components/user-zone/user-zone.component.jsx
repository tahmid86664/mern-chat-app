import React, {useState} from 'react'

import './user-zone.style.css';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

const UserZone = () => {
    const [userState, setUserState] = useState('online');
    const [friendState, setFriendState] = useState('offline');
    return (
        <div className="user__zone">
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
            <div className="user__zone__body">
                <div className="user__zone__left">
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
                    <div className="user__zone__friends">
                        <div className="user__zone__friend__container">
                            <AccountCircleIcon />
                            <div className="user__zone__friendInfo">
                                <p className="user__zone__friendName">Abu Hossain Dabu</p>
                                <p className="user__zone__friendStatus">
                                    <span className={friendState === 'online' ? "user__zone__onlineIcon" : "user__zone__offlineIcon"}></span>
                                    {friendState}
                                </p>
                            </div>
                        </div>
                        <div className="user__zone__friend__container">
                            <AccountCircleIcon />
                            <div className="user__zone__friendInfo">
                                <p className="user__zone__friendName">Sabu Shikdar</p>
                                <p className="user__zone__friendStatus">
                                    <span className={friendState === 'online' ? "user__zone__onlineIcon" : "user__zone__offlineIcon"}></span>
                                    {friendState}
                                </p>
                            </div>
                        </div>
                        <div className="user__zone__friend__container">
                            <AccountCircleIcon />
                            <div className="user__zone__friendInfo">
                                <p className="user__zone__friendName">Sabu Shikdar</p>
                                <p className="user__zone__friendStatus">
                                    <span className={friendState === 'online' ? "user__zone__onlineIcon" : "user__zone__offlineIcon"}></span>
                                    {friendState}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user__zone__right">
                    <div className="user__zone__createRoom">
                        <form className="user__zone__createRoom__form">
                            <input className="user__zone__createRoom__form__input" type="text" placeholder="enter room name..." />
                            <button className="user__zone__createRoom__form__button">create room</button>
                        </form>
                    </div>
                    <div className="user__zone__rooms">
                        <div className="user__zone__room__container">
                            <GroupWorkIcon />
                            <div className="user__zone__roomInfo">
                                <p className="user__zone__roomName">MERN Dev Room</p>
                                <p className="user__zone__roomCreator">Created by Tahmid Khandokar</p>
                                <div className="user__zone__roomButtons">
                                    <IconButton>
                                        <DeleteForeverIcon />
                                    </IconButton>
                                    <IconButton className="done__button" >
                                        <DoneOutlineIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div className="user__zone__room__container">
                            <GroupWorkIcon />
                            <div className="user__zone__roomInfo">
                                <p className="user__zone__roomName">MERN Dev Room</p>
                                <p className="user__zone__roomCreator">Created by Tahmid Khandokar</p>
                                <div className="user__zone__roomButtons">
                                    <IconButton>
                                        <DeleteForeverIcon />
                                    </IconButton>
                                    <IconButton className="done__button" >
                                        <DoneOutlineIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserZone;
