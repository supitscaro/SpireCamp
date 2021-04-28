import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHostings } from "../../store/hostings";
import "./hostingComponent.css";

function HostingComponent() {
    const dispatch = useDispatch();
    const hostingLists = useSelector((state) => state.hosting.list);

    useEffect(() => {
        dispatch(getHostings());
    }, [dispatch]);

    return (
        <div>
            <div class="filters">
                <div className="states">
                    <div className="states-title">Search By States</div>
                </div>
                <div className="activities">
                    <div>Search By Activities</div>
                </div>
                <div className="acc">
                    <div>Search By Accommodations</div>
                </div>
            </div>
            <div className="hosting-post">
                {hostingLists.map((host => (
                    <div className="indiv-post">
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
