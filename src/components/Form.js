// New file

import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fullName, phoneNumber, email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <h2>Basic User Details</h2>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <button className="submit-btn" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Form;