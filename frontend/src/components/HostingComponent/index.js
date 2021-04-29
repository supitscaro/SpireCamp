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
                <div className="states">
                    <img src={Colorado} alt="" />
                    <h2 onClick={handleSearch} id="6" className="states-title">Search For Colorado</h2>
                </div>
                <div className="states">
                    <img src={Georgia} alt="" />
                    <h2 onClick={handleSearch} id="10" className="states-title">Search For Georgia</h2>
                </div>
                <div className="states">
                    <img src={NorthC} alt="" />
                    <h2 onClick={handleSearch} id="33" className="states-title">Search For North Carolina</h2>
                </div>
                <div className="activities">
                    <img src={Hiking} alt="" />
                    <div onClick={handleActivities} id="2" className="activities-title">Search By Hiking</div>
                </div>
                <div className="activities">
                    <img src={Running} alt="" />
                    <div onClick={handleActivities} id="7" className="activities-title">Search By Running</div>
                </div>
                <div className="activities">
                    <img src={Biking} alt="" />
                    <div onClick={handleActivities} id="5" className="activities-title">Search By Biking</div>
                </div>
                <div className="acc">
                    <div>Search By Accommodations</div>
                </div>
            </div>
            <div className="hosting-post">
                {hostingLists.map((host => (
                    <div className="indiv-post" key={host.name}>
                        <Link className="links" to={`/postings/${host.id}`}>
                            {console.log(host.photoUrl)}
                            {/* <img src={require(`./${host.photoUrl}`)} alt="" /> */}
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
