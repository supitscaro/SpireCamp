import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateHostings } from "../../store/hostings";

function StateHostings() {
    const { states_id } = useParams();
    // console.log("states", user_id);
    const dispatch = useDispatch();
    const hostingLists = useSelector((state) => state.hosting[states_id]);

    useEffect(() => {
        dispatch(stateHostings(states_id));
    }, [states_id])

    return (
        <div>
            {/* {hostingLists.map((host) => (
                <div>{host.name}</div>
            ))} */}
            {console.log(hostingLists)}
        </div>
    )

}

export default StateHostings;
