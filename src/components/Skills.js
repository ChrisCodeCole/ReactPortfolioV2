import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div>
            <h1>This is the skills page.</h1>
            <ul>
                <li><Link to='/'>About</Link></li>
            </ul>
        </div>
    );
};

export default Skills;