import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import Colorado from "../../images/Colorado.jpeg";
import Georgia from "../../images/Georgia.jpeg";
import NorthC from "../../images/NorthC.jpeg";
import "./hostingComponent.css";

function StatesComponent() {
    const history = useHistory();

    const handleSearch = (e) => {
        history.push(`/states/${e.target.id}`);
    };

    return (
        <>
            <span className="states-card">
                <div className="states">
                    <img src={Colorado} alt="" />
                </div>
                <div className="states-info-card">
                    <div className="states-phrase">
                        <h2 className="title">Search For Best Spots in Colorado</h2>
                    </div>
                    <div class="states-expo">
                        <h2 className="states-title" onClick={handleSearch} id="6">Explore</h2>
                    </div>
                </div>
            </span>
            <span className="states-card">
                <div className="states">
                    <img src={Georgia} alt="" />
                </div>
                <div className="states-info-card">
                    <div className="states-phrase">
                        <h2 className="title">Search For Best Spots in Georgia</h2>
                    </div>
                    <div className="states-expo">
                        <h2 className="states-title" onClick={handleSearch} id="10">Explore</h2>
                    </div>
                </div>
            </span>
            <div className="states-card">
                <div className="states">
                    <img src={NorthC} alt="" />
                </div>
                <div className="states-info-card">
                    <div className="states-phrase">
                        <h2 className="title">Search For Best Spots in North Carolina</h2>
                    </div>
                    <div className="states-expo" >
                        <h2 className="states-title" onClick={handleSearch} id="33">Explore</h2>
                    </div>
                </div>
            </div>
        </>
    )
}


export default StatesComponent;
