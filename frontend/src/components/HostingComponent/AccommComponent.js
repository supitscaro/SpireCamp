import React from 'react';
import { useHistory } from "react-router-dom";
import Secluded from "../../images/secluded.jpeg";
import Meditation from "../../images/meditation.jpeg";
import Nature from "../../images/nature.jpeg";
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
                        <img className="accommodation-img" src={Secluded} alt="" />
                    </div>
                    <div className="accommodation-info-card">
                        <div className="accommodations-phrase">
                            <h2 className="title">Search For Locations With Secluded Areas</h2>
                        </div>
                        <div className="accommodations-expo">
                            <h2 className="accommodations-title" onClick={handleSearch} id="1">Explore</h2>
                        </div>
                    </div>
                </span>
                <span className="accommodation-card-2">
                    <div className="accommodations">
                        <img className="accommodation-img" src={Meditation} alt="" />
                    </div>
                    <div className="accommodation-info-card">
                        <div className="accommodations-phrase">
                            <h2 className="title">Search For Locations With Meditation workshops</h2>
                        </div>
                        <div className="accommodations-expo">
                            <h2 className="accommodations-title" onClick={handleSearch} id="2">Explore</h2>
                        </div>
                    </div>
                </span>
                <div className="accommodation-card">
                    <div className="accommodations">
                        <img className="accommodation-img" src={Nature} alt="" />
                    </div>
                    <div className="accommodation-info-card">
                        <div className="accommodations-phrase">
                            <h2 className="title">Search For Spots With Guided Tours of Nature Nearby</h2>
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
