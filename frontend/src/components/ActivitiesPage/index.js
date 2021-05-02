import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activityFilter } from "../../store/hostings";
import "./activity.css";
import Footer from '../Footer';

function ActivityHostings() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const activities = useSelector((state) => Object.values(state.hosting?.hostings?.activities));

    useEffect(() => {
        dispatch(activityFilter(id));
    }, [dispatch, id]);

    if (!activities) return null;

    return (
        <div className="card-component">
            {activities.map((activity) => (
                <div className="cards">
                    <div className="card">
                        <img className="card-img" src={activity.photoUrl} alt="" />
                    </div>
                    <div className="spot-info">
                        <div className="name">{activity.name}</div>
                        <div className="desc">{activity.description}</div>
                        <div className="deets">{activity.locationDetails}</div>
                        <Link className="activity-link" to={`/postings/${activity.id}`}>
                            <h2>Explore</h2>
                        </Link>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default ActivityHostings;
