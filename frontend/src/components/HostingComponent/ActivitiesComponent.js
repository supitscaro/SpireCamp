import React from 'react';
import { useHistory } from "react-router-dom";
import Hiking from "../../images/Hiking.jpeg";
import Running from "../../images/Running.jpeg";
import Biking from "../../images/Biking.jpeg";
import "./hostingComponent.css";
import "./activities.css";

function ActivitiesComponent() {
    const history = useHistory();

    const handleActivities = (e) => {
        history.push(`/activities/${e.target.id}`);
    };

    return (
        <>
            {/* <div className="wide-divs"> */}
            <span className="activities-card">
                <div className="activities">
                    <img className="activities-img" src={Running} alt="" />
                </div>
                <div className="activities-info-card">
                    <div className="activities-phrase">
                        <h2 className="title">Search By Running</h2>
                    </div>
                    <div className="activities-expo">
                        <h2 className="activities-title" onClick={handleActivities} id="7">Explore</h2>
                    </div>
                </div>
            </span>
            <div className="activities-card">
                <div className="activities">
                    <img className="activities-img" src={Biking} alt="" />
                </div>
                <div className="activities-info-card">
                    <div className="activities-phrase">
                        <h2 className="title">Search By Biking</h2>
                    </div>
                    <div className="activities-expo" >
                        <h2 className="activities-title" onClick={handleActivities} id="5">Explore</h2>
                    </div>
                </div>
            </div>
            {/* </div> */}
            <span className="activities-card">
                <div className="activities">
                    <img className="activities-img" src={Hiking} alt="" />
                </div>
                <div className="activities-info-card">
                    <div className="activities-phrase">
                        <h2 className="title">Search By Hiking</h2>
                    </div>
                    <div className="activities-expo">
                        <h2 className="activities-title" onClick={handleActivities} id="2">Explore</h2>
                    </div>
                </div>
            </span>
        </>
    )
}

export default ActivitiesComponent;
