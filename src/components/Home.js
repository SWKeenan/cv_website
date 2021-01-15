import React from 'react';
import me from '../assets/images/me.png';
import wrench from '../assets/images/wrench.svg';
import cogs from '../assets/images/cogs.svg';
import github from '../assets/images/github.svg';
import {Link} from 'react-router-dom';
import './Home.css';


export default class Home extends React.Component{

    render(){
        return (
            <div className="container">
                <div className="homepageWhiteBackground">
                    <img src={me} alt="Shane Keenan" className="homepageImage" />
                    <p className="homepageTitle">Shane Keenan</p>
                    <p className="homepageSubtitle">Developer Portfolio</p>
                    <div className="homepagePurpleBackground">
                        <p className="homepageText">Hi I'm Shane. I'm an Irish programmer who loves to play around with programming and learning new things.</p>
                        <div className="homepageIconsWrapper">
                            <div className="homepageIcons">
                                <Link to={`/projects`}>
                                <img alt="wrench" src={wrench} />
                                <p className="homepageIconsText">Projects</p>
                                </Link>
                            </div>
                            <div className="homepageIcons">
                                <a href="https://github.com/SWKeenan" target="_blank" rel="noreferrer">
                                <img alt="github" src={github} />
                                <p className="homepageIconsText">Github</p>
                                </a>
                            </div>
                            <div className="homepageIcons">
                                <Link to={`/skills`}>
                                <img alt="cogs" src={cogs} />
                                <p className="homepageIconsText">Skills</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}