import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./navigation.css";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button className="profile-btn" onClick={openMenu}>
                <i className="fa fa-user-circle" />
            </button>
            {showMenu && (
                <div className="profile-dropdown">
                    <div className="user-name">{user.username}</div>
                    <div className="logout-btn">
                        <button className="logout-btn-circle" onClick={logout}>Log Out</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
