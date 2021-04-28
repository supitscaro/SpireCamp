import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateHostings } from "../../store/hostings";

function StateHostings() {
    const { id } = useParams();
    // console.log("states", user_id);
    const dispatch = useDispatch();
    // const hostingLists = useSelector((state) => state.hosting.list);

    const state = useSelector((state) => state.hosting?.hostings.state[id]);


    useEffect(() => {
        dispatch(stateHostings(id));
    }, [dispatch, id]);

    if (!state) return null;

    return (
        <div>
            state hosting page
            <div>{state.name}</div>
            <div>{state.description}</div>
            <div>{state.locationDetails}</div>
        </div>
    )

}

export default StateHostings;
