import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import './navbar.css'
import Sidebar from '../sidebar/sidebar';
const Navbar = () => {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        <span className="logo">Creative </span>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <NotificationsNoneIcon />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
          <LanguageIcon />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
          <SettingsIcon />
        </div>
        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
      </div>
    </div>

    <Sidebar />

  </div>

    )
}

export default Navbar