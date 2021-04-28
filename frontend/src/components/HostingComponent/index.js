import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHostings } from "../../store/hostings";

function HostingComponent() {
    const dispatch = useDispatch();
    const hostingLists = useSelector((state) => state.hosting.list);

    useEffect(() => {
        dispatch(getHostings());
    }, [dispatch]);

    return (
        <div>
            Hello
            {hostingLists.map((host => (
                <Link to={`/postings/${host.id}`}>
                    <div>{host.name}</div>
                    <div>{host.description}</div>
                    <div>{host.locationDetails}</div>
                    <div>{host.State.name}</div>
                </Link>
            )))}
        </div>
    )
}


export default HostingComponent;
