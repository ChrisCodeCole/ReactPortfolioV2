import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TopNav.css';

class TopNav extends Component {
    constructor(props){
        super();
        this.state = {

        }
    }

    render() {
        const { aboutPage, skillsPage, projectsPage, contactPage } = this.props;

        return (
            <div className="TopNav-Container">
                <ul className="TopNav-List">
                    <li><Link className={ aboutPage ? "TopNav-Active TopNav-ListItem" : "TopNav-ListItem" } to='/'>About</Link></li>
                    <li><Link className={ skillsPage ? "TopNav-Active TopNav-ListItem" : "TopNav-ListItem" } to='/skills'>Skills</Link></li>
                    <li><Link className={ projectsPage ? "TopNav-Active TopNav-ListItem" : "TopNav-ListItem" } to='/projects'>Projects</Link></li>
                    <li><Link className={ contactPage ? "TopNav-Active TopNav-ListItem" : "TopNav-ListItem" } to='/contact'>Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export default TopNav;