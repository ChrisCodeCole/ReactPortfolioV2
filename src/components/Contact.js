import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1>This is the contact page.</h1>
            <ul>
                <li><Link to='/'>About</Link></li>
            </ul>
        </div>
    );
};

export default Contact;