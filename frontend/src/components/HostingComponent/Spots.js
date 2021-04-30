import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHostings } from "../../store/hostings";
import "./hostingComponent.css";
import "./spots.css";

function SpotsComponent() {
    const dispatch = useDispatch();
    const hostingLists = useSelector((state) => Object.values(state.hosting.hostings));
    const list = useSelector((state) => state.hosting.hostings);
    console.log('list', list);

    useEffect(() => {
        dispatch(getHostings());
    }, [dispatch]);

    return (
        <>
            {hostingLists.map((host => !host.id ? null : (
                <div className="indiv-post" key={host.hostings_id}>
                    <Link className="links" to={`/postings/${host.id}`} key={host.hostings_id}>
                        <div className="spots-card">
                            <img className="spots-img" src={host.photoUrl} alt="" />
                            {/* <div className="spots-info-card"> */}
                            <div className="spots-phrase ">
                                <h2 className="spots-title">{host.name}</h2>
                                <p className="post-desc" >{host.description}</p>
                                <p className="post-location">{host.locationDetails}</p>
                            </div>
                            {/* </div> */}
                        </div>
                    </Link>
                </div>
            )))}

        </>
    )
}

export default SpotsComponent;
