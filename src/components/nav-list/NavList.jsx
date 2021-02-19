import React from 'react'
import { Nav } from 'reactstrap'

import NavListItem from './NavListItem.jsx'

const NavList = props => {

    const { totalCartItems, totalWishlistItems } = props

    return (
        <Nav className="flex-row" navbar>
            <NavListItem to="/cart" count={totalCartItems}>
                <ion-icon name="pizza-outline" style={{fontSize: "24px"}}></ion-icon>
            </NavListItem>

        </Nav>
    )
}

export default NavList