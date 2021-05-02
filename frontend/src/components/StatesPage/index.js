import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateHostings } from "../../store/hostings";
import "./states.css";
import Footer from '../Footer';

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
            <h2 className="spots-states">Spots Based On States</h2>
            {states.map((state) => (
                <div class="cards">
                    <div className="card">
                        <img className="card-img" src={state.photoUrl} alt="" />
                    </div>
                    <div className="spot-info">
                        <div className="name">{state.name}</div>
                        <div className="desc">{state.description}</div>
                        <div className="deets">{state.locationDetails}</div>
                        <Link className="state-link" to={`/postings/${state.id}`}>
                            <h2>Explore</h2>
                        </Link>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default StateHostings;
