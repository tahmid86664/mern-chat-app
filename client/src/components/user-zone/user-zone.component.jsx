import React from 'react'

import './user-zone.style.css';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

const UserZone = () => {

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
                    <div className="user__zone__user"></div>
                    <div className="user__zone__friends"></div>
                </div>
                <div className="user__zone__right">
                    <div className="user__zone__rooms"></div>
                </div>
            </div>
        </div>
    )
}


export default UserZone;
