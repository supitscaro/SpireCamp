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
                        {console.log(host.photoUr)}
                        <img src={host.photoUrl} alt="" />
                        <div className="post-title">{host.name}</div>
                        <div className="post-desc">{host.description}</div>
                        <div className="post-location">{host.locationDetails}</div>
                    </Link>
                </div>
            )))}
        </div>
    )
}

export default SpotsComponent;
