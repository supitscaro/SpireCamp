import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { allActivities } from '../../store/hostings';

function HostingForm() {
    const dispatch = useDispatch();
    const activitiesList = useSelector(state => Object.values(state.hosting?.hostings));

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(allActivities());
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
    }

    return (
        <form onSubmit={handleSubmit}>
            {console.log('activities', activitiesList)}
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Name of Hosting
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Description
                <input
                    type="password"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Share Hosting</button>
        </form>
    );
}

export default HostingForm;
