import React from 'react';
import TopNav from './TopNav';
import '../styles/About.css';


const About = () => {
    return (
        <div className="About-Container">
            {/* <img src="" alt=""/> */}
            {/* temporary placeholder */}
            <span style={{ color: "white"}}>LOGO</span>
            <TopNav aboutPage={true} />
            <div>
                {/* temporary placeholder */}
                <span style={{ color: "white"}}>LEFT ARROW</span>
            </div>
            <div>
                <h1 style={{ color: "white"}}>Christian Coleman</h1>
                <h2 style={{ color: "white"}}>Web Developer</h2>
            </div>
            <span>
                <p style={{ color: "white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolores tenetur perspiciatis quae voluptates hic alias consequatur! Ipsum, assumenda. Illum ratione beatae odio ipsam odit cupiditate explicabo eveniet labore error?</p>
            </span>
            {/* <img src="" alt=""/> */}
            {/* temporary placeholder */}
            <span style={{ color: "white"}}>IMAGE</span>
            <div>
                {/* temporary placeholder */}
                <span style={{ color: "white"}}>RIGHT ARROW</span>
            </div>
        </div>
    );
};

export default About;