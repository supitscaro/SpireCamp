import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getHostings } from "../../store/hostings";
import "./signup.css";

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const testHosting = useSelector((state) => state.hosting.list);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        dispatch(getHostings());
    }, [dispatch]);

    if (sessionUser) return <Redirect to="/" />;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });

        }
        return setErrors(['Passwords do not match.']);
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            {console.log(testHosting)}
            <ul>
                {errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
            <label className="email">
                Email
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                />
            </label>
            <label className="username-signup">
                Username
                {/* {console.log(testHosting)} */}
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="username-input-signup"
                />
            </label>
            <label className="password-signup">
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="password-input-signup"
                />
            </label>
            <label className="confirmed-password">
                Confirm Password
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="password-conf-input"
                />
            </label>
            <button className="signup-btn" type="submit">Sign Up</button>
        </form>
    )
}

export default SignupFormPage;
