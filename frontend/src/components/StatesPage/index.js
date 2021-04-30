import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateHostings } from "../../store/hostings";
import "./states.css";

function StateHostings() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const states = useSelector((state) => Object.values(state.hosting?.hostings?.state));

    useEffect(() => {
        dispatch(stateHostings(id));
    }, [dispatch, id]);

    if (!states) return null;

    return (
        <div className="card-component">
            {states.map((state) => (
                <div className="card">
                    <div className="name">{state.name}</div>
                    <div className="desc">{state.description}</div>
                    <div className="deets">{state.locationDetails}</div>
                </div>
            ))}
        </div>
    )
}

export default StateHostings;
