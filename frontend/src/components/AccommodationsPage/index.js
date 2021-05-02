import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allAccommodations } from "../../store/hostings";
import "./acc.css";
import Footer from '../Footer';

function AccommodationsHostings() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const accommodations = useSelector((state) => Object.values(state.hosting?.hostings?.accommodations));

    useEffect(() => {
        dispatch(allAccommodations(id));
    }, [dispatch, id]);

    if (!accommodations) return null;

    return (
        <div className="card-component">
            {accommodations.map((accommodation) => (
                <div className="cards">
                    <div className="card">
                        <img className="card-img" src={accommodation.photoUrl} alt="" />
                    </div>
                    <div className="spot-info">
                        <div className="name">{accommodation.name}</div>
                        <div className="desc">{accommodation.description}</div>
                        <div className="deets">{accommodation.locationDetails}</div>
                        <Link className="accommodation-link" to={`/postings/${accommodation.id}`}>
                            <h2>Explore</h2>
                        </Link>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default AccommodationsHostings;
