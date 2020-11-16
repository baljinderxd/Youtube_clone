import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import { Apps } from '@material-ui/icons'
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"

function Header() {
    return (
        <div className="header">
         <div className="header__left" >

        <MenuIcon />
            <img
             className="header__logo"
             src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" />
        </div> 
        <div className="header__input" >    
             <input
             placeholder="Search"
              type="text" />
              <SearchIcon className="header_inputButton" />
        </div>
        <div className="header__icons">
              <VideoCallIcon className="header_icon" />
              <AppsIcon className="header_icon"/>
              <NotificationsIcon className="header_icon" />
              <Avatar 
              alt="Sakshi"
              src="https://r.search.yahoo.com/_ylt=Awr9Gi8Ve7Ff5OcAI1dXNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1605495702/RO=10/RU=https%3a%2f%2fwww.pexels.com%2fphoto%2fperson-standing-near-lake-670720%2f/RK=2/RS=gzx63imiynC41WO7jSNNJcFzwMA-"
              
              />
        </div>
        </div>
    )
}

export default Header

