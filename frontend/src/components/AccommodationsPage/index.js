import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allAccommodations } from "../../store/hostings";

function AccommodationsHostings() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const accommodations = useSelector((state) => Object.values(state.hosting?.hostings?.accommodations));

    useEffect(() => {
        dispatch(allAccommodations(id));
    }, [dispatch, id]);

    if (!accommodations) return null;

    return (
        <div>
            {accommodations.map((accommodation) => (
                <div>
                    <div>
                        <i className={accommodation.icon}></i>
                        {accommodation.name}
                    </div>
                    <div>{accommodation.description}</div>
                </div>
            ))}
        </div>
    )
}

export default AccommodationsHostings;
