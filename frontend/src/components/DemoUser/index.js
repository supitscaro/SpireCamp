import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../store/session';
import "./demo.css";

function DemoUser() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            credential: 'SaraMarin',
            password: 'password2'
        }
        await dispatch(login(user));
        history.push('/');
    }

    return (
        <div className='splash-demo-btn'>
            <form onSubmit={handleSubmit}>
                <button className="demo-btn" type='submit'>Demo User</button>
            </form>
        </div>
    )
}

export default DemoUser;
