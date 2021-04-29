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
                <LoginFormModal className="login" />
                <NavLink className="link signup" to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div className="navbar">
            <div className="nav">
                <NavLink className="logo" exact to="/">SpireCamp</NavLink>
                <NavLink className="link" exact to="/start-hosting">Start Hosting</NavLink>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
