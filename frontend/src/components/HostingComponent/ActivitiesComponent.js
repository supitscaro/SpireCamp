import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import Hiking from "../../images/Hiking.jpeg";
import Running from "../../images/Running.jpeg";
import Biking from "../../images/Biking.jpeg";
import "./hostingComponent.css";

function ActivitiesComponent() {
    const history = useHistory();

    const handleActivities = (e) => {
        history.push(`/activities/${e.target.id}`);
    };

    return (
        <>
            <div className="activities-card">
                <div className="activities">
                    <img src={Hiking} alt="" />
                </div>
                <div className="activities-info-card">
                    <div className="activities-phrase">
                        Search By Hiking
                        </div>
                    <div className="activities-expo">
                        <h2 onClick={handleActivities} id="2" className="activities-title">Explore</h2>
                    </div>
                </div>
            </div>
            <div className="activities-card">
                <div className="activities">
                    <img src={Running} alt="" />
                </div>
                <div className="activities-info-card">
                    <div className="activities-phrase">
                        Search By Running
                        </div>
                    <div className="activities-expo">
                        <h2 onClick={handleActivities} id="7" className="activities-title">Explore</h2>
                    </div>
                </div>
            </div>
            <div className="activities-card">
                <div className="activities">
                    <img src={Biking} alt="" />
                </div>
                <div className="activities-info-card">
                    <div className="activities-phrase">
                        Search By Biking
                        </div>
                    <div className="activities-expo">
                        <h2 onClick={handleActivities} id="5" className="activities-title">Explore</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivitiesComponent;
