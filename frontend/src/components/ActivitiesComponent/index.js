import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activityFilter } from "../../store/hostings";

function ActivityHostings() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const activities = useSelector((state) => Object.values(state.hosting?.hostings?.activities));

    useEffect(() => {
        dispatch(activityFilter(id));
    }, [dispatch, id]);


    return (
        <div>
            {activities.map((activity) => (
                <div>
                    <div className={activity.icon}>{activity.name}</div>
                    <div>{activity.description}</div>
                </div>
            ))}
        </div>
    )
}

export default ActivityHostings;
