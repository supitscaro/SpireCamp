import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import "./navigation.css";


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <div className="login">
                    <LoginFormModal />
                </div>
                <div className="signup">
                    <NavLink className="link" to="/signup">Sign Up</NavLink>
                </div>
            </>
        );
    }

    return (
        <div className="navbar">
            <NavLink className="logo" exact to="/">SpireCamp</NavLink>
            <div className="nav">
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
