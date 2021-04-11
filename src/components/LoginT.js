import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import StoreIcon from '@material-ui/icons/Store';



const LoginT = () => {
  return (
    <div className="logint">
      <div className="logint__in">
        <h4>New Customer?</h4>
        <h4 style={{ paddingLeft: '30px' }}><a style={{ color: '#2874f0' }}>Sign Up</a></h4>
      </div>
      <hr />
      <div className="logint__in">
        <AccountCircleIcon></AccountCircleIcon>
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint__in">
        <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="plus" />
        <p>Flipkart Plus Zone</p>
      </div>
      <hr />
      <div className="logint__in">
        <StoreIcon></StoreIcon>
        <p>Orders</p>
      </div>
      <hr />
      <div className="logint__in">
        <FavoriteIcon></FavoriteIcon>
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="logint__in">
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint__in">
        <CardGiftcardIcon />
        <p>Gift Cards</p>
      </div>
    </div >
  )
}

export default LoginT
