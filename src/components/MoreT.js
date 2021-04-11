import React from 'react'
import ShopIcon from '@material-ui/icons/Shop';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GetAppIcon from '@material-ui/icons/GetApp';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
//import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


const MoreT = () => {
  return (
    <div className="moret">
      <div className="moret__in">
        <NotificationsIcon />
        <p>Notifications Preferences</p>
      </div>
      <hr />
      <div className="moret__in">
        <ShopIcon />
        <p>Sell on Flipkart</p>
      </div>
      <hr />
      <div className="moret__in">
        <LiveHelpIcon />
        <p>24*7 Customer Care</p>
      </div>
      <hr />
      <div className="moret__in">
        <TrendingUpIcon />
        <p>Advertise</p>
      </div>
      <hr />
      <div className="moret__in">
        <GetAppIcon />
        <p>Download app</p>
      </div>
    </div>
  )
}

export default MoreT
