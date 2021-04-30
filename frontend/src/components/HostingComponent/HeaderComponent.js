import React from 'react';
import Header from "../../images/header2.jpeg";
import "./header.css";

function HeaderComponent() {
    return (
        <>
            <div className="header-card">
                <div className="outer-div">
                    <img className="header" src={Header} alt="" />
                </div>
                <div className="secondary-div">
                    <h2 className="header-title">Find yourself outside.</h2>
                </div>
            </div>
            <div className="slogan-div">
                <h2 className="slogan-title">Discover the world and the new inner you.</h2>
            </div>
        </>
    )
}

export default HeaderComponent;
