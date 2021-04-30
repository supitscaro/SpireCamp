import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getHostings } from "../../store/hostings";
import "./hostingComponent.css";
import Colorado from "../../images/Colorado.jpeg";
import Georgia from "../../images/Georgia.jpeg";
import NorthC from "../../images/NorthC.jpeg";
import Hiking from "../../images/Hiking.jpeg";
import Running from "../../images/Running.jpeg";
import Biking from "../../images/Biking.jpeg";
import StatesComponent from './StatesComponent';

function HostingComponent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const hostingLists = useSelector((state) => Object.values(state.hosting.hostings));

    useEffect(() => {
        dispatch(getHostings());
    }, [dispatch]);

    const handleSearch = (e) => {
        history.push(`/states/${e.target.id}`);
    };

    const handleActivities = (e) => {
        history.push(`/activities/${e.target.id}`);
    };

    return (
        <div>
            <div class="filters">
                <StatesComponent />
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
            </div>

            <div className="acc">
                <div>Search By Accommodations</div>
            </div>
            <div className="hosting-post">
                {hostingLists.map((host => (
                    <div className="indiv-post" key={host.name}>
                        <Link className="links" to={`/postings/${host.id}`}>
                            {console.log(host.photoUr)}
                            <img src={host.photoUrl} alt="" />
                            <div className="post-title">{host.name}</div>
                            <div className="post-desc">{host.description}</div>
                            <div className="post-location">{host.locationDetails}</div>
                        </Link>
                    </div>
                )))}
            </div>
        </div>
    )
}


export default HostingComponent;
