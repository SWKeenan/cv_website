import React from 'react';
import loader from '../assets/images/loader.gif';
import './Projects.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Projects extends React.Component{

    state = {
        projects: [],
        loading: true,
    }

    componentDidMount(){
        axios.get('https://shanewkeenan.herokuapp.com/api/projects/')
      .then(res => {
        const projects = res.data;
        this.setState({ projects, loading: false, });
        console.log(projects);
      })
    }

    render(){
        var {loading} = this.state;
        if (loading){
            return (
                <div className="container">
                    <div className="projectsPurpleBottomBackground" style={{height: '100vh'}}>
                        <div className="loadingScreenWrapper">
                        <div className="loadingScreenTitle">Loading...</div>
                        <p className="loadingScreenSubtitle">Retreiving the data, please wait.</p>
                        <img src={loader} className="loadingScreenImage" alt="loading" />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="projectsPurpleTopBackground" />
                    <p className="projectsTitle">Projects</p>
                    <p className="projectsSubtitle">Take a look at what I've been working on.</p>
                    <div className="projectsPurpleBottomBackground">
                        <div className="projectsListWrapper">
                            {this.state.projects.map(project => 
                                    <div className="projectsItem">
                                        <div className="imageBox">
                                        <Link to={`/projects/${project.slug}`}>
                                            <img src={project.image} className="projectsItemImage" alt={project.name} />
                                        </Link>
                                        </div>
                                        <div className="projectsItemTitle" >{project.name}</div>
                                        <div className="projectsItemDescription" >{project.description}</div>
                                        {project.languagesUsed.map(item =>
                                        <img src={item.image} className="projectsLanguages" title={item.name} alt={item.name} />
                                            )}
                                        <Link to={`/projects/${project.slug}`}>
                                            <p className="projectsLearnMore">Learn More</p>
                                        </Link>
                                    </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            )
            }
}
}