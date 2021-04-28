import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getHostings } from "../../store/hostings";
import "./hostingComponent.css";

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
                    <div onClick={handleSearch} id="6" className="states-title">Search For Colorado</div>
                </div>
                <div className="states">
                    <div onClick={handleSearch} id="10" className="states-title">Search For Georgia</div>
                </div>
                <div className="states">
                    <div onClick={handleSearch} id="33" className="states-title">Search For North Carolina</div>
                </div>
                <div className="activities">
                    <div onClick={handleActivities} id="2" >Search By Hiking</div>
                </div>
                <div className="activities">
                    <div onClick={handleActivities} id="7" >Search By Running</div>
                </div>
                <div className="activities">
                    <div onClick={handleActivities} id="5" >Search By Biking</div>
                </div>
                <div className="acc">
                    <div>Search By Accommodations</div>
                </div>
            </div>
            <div className="hosting-post">
                {hostingLists.map((host => (
                    <div className="indiv-post" key={host.name}>
                        <Link to={`/postings/${host.id}`}>
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
