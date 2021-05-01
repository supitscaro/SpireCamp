import React from 'react';
import { useHistory } from "react-router-dom";
import Colorado from "../../images/Colorado.jpeg";
import Georgia from "../../images/Georgia.jpeg";
import NorthC from "../../images/NorthC.jpeg";
// import "./hostingComponent.css";
import "./accommodation.css";

function AccommodationsComponent() {
    const history = useHistory();

    const handleSearch = (e) => {
        history.push(`/accommodations/${e.target.id}`);
    };

    return (
        <>
            <div className="acc-div">
                <span className="accommodation-card-1">
                    <div className="accommodations">
                        <img className="accommodation-img" src={Colorado} alt="" />
                    </div>
                    <div className="accommodation-info-card">
                        <div className="accommodations-phrase">
                            <h2 className="title">Search By Silence</h2>
                        </div>
                        <div className="accommodations-expo">
                            <h2 className="accommodations-title" onClick={handleSearch} id="1">Explore</h2>
                        </div>
                    </div>
                </span>
                <span className="accommodation-card-2">
                    <div className="accommodations">
                        <img className="accommodation-img" src={Georgia} alt="" />
                    </div>
                    <div className="accommodation-info-card">
                        <div className="accommodations-phrase">
                            <h2 className="title">Search For Best Spots in Georgia</h2>
                        </div>
                        <div className="accommodations-expo">
                            <h2 className="accommodations-title" onClick={handleSearch} id="2">Explore</h2>
                        </div>
                    </div>
                </span>
                <div className="accommodation-card">
                    <div className="accommodations">
                        <img className="accommodation-img" src={NorthC} alt="" />
                    </div>
                    <div className="accommodation-info-card">
                        <div className="accommodations-phrase">
                            <h2 className="title">Search For Best Spots in North Carolina</h2>
                        </div>
                        <div className="accommodations-expo" >
                            <h2 className="accommodations-title" onClick={handleSearch} id="3">Explore</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AccommodationsComponent;
