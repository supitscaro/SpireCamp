import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateHostings } from "../../store/hostings";

function StateHostings() {
    const { id } = useParams();
    // console.log("states", user_id);
    const dispatch = useDispatch();
    const hostingLists = useSelector((state) => state.hosting);

    useEffect(() => {
        dispatch(stateHostings(id));
    }, [id])

    // if (!hostingLists) return null;

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
