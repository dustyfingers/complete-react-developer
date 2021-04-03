import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            { currentUser ? 
                (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>) :
                (<Link className="option" to="/sign-in">SIGN IN</Link>) 
            }
            <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
    </div>
);

// 'state' in this context is the top level rootReducer object
// the following lines (inclusing the mods at the bottom)
// allow us to remove the currentUser prop from being passed in App.js
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
