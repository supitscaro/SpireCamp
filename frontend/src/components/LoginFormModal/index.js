import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DemoUser from '../DemoUser';
import LoginForm from './LoginForm';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="login" onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                    <DemoUser />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
