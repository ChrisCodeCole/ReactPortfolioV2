import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h1>This is the projects page.</h1>
            <ul>
                <li><Link to='/'>About</Link></li>
            </ul>
        </div>
    );
};

export default Projects;