import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './landing.css'
const Landing = props => {

    return (
        <div id="icon-header">
    <img id="header-img" src="https://cdn2.iconfinder.com/data/icons/beekeeping-at-garden/128/yumminky-garden-beekeeping-64-512.png" alt="" />
        <center>
        <div class="promo-container1">
    <h2 id="header-h1">Welcome to cafe WIFI</h2>
    <h1 className="promo-title"><span>All your</span>
        <span>Favorite food Right Here.</span>
        <span>All right here.</span>
      </h1>
      </div>
      <Link to="/menu">
      <Button outline color="primary">Take Orders</Button>{' '}
      </Link>
    </center>
     </div>
        )
}

export default Landing
