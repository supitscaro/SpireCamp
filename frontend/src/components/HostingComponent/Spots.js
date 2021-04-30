import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHostings } from "../../store/hostings";
import "./hostingComponent.css";
import "./spots.css";

function SpotsComponent() {
    const dispatch = useDispatch();
    const hostingLists = useSelector((state) => Object.values(state.hosting.hostings));

    useEffect(() => {
        dispatch(getHostings());
    }, [dispatch]);
    return (
        <div className="hosting-post">
            {hostingLists.map((host => (
                <div className="indiv-post" key={host.name}>
                    <Link className="links" to={`/postings/${host.id}`}>
                        <div className="spots-card">
                            <img className="spots-img" src={host.photoUrl} alt="" />
                            <div className="spots-info-card">
                                <div className="spots-phrase">
                                    <h2 className="spots-title">{host.name}</h2>
                                    <div className="post-desc">{host.description}</div>
                                    <div className="post-location">{host.locationDetails}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )))}
        </div>
    )
}

export default SpotsComponent;
