import React from 'react';
import loader from '../assets/images/loader.gif';
import all from '../assets/images/all.svg';
import wordpress from '../assets/images/wordpress.svg';
import django from '../assets/images/django.svg';
import react from '../assets/images/react.svg';
import python from '../assets/images/python.svg';
import github from '../assets/images/gh.svg';
import java from '../assets/images/java.svg';
import vue from '../assets/images/vue.svg';
import './Projects.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default class Projects extends React.Component{

    state = {
        projects: [],
        filteredProjects: [],
        languagesButtons: [
            {name: 'All', image: all},
            {name: 'Python', image: python},
            {name: 'Django', image: django},
            {name: 'React', image: react},
            {name: 'Vue', image: vue},
            {name: 'Java', image: java},
            {name: 'WordPress', image: wordpress},
            {name: 'GitHub', image: github},
        ],
        loading: true,
    }

    componentDidMount(){
        axios.get('https://shanewkeenan.herokuapp.com/api/projects/')
      .then(res => {
        const projects = res.data;
        this.setState({ projects, loading: false, });
        this.setState({filteredProjects: projects})
      })
    }

    filterProjects = (event) =>{
        let filteredProjects;

        if(event.target.value === 'All'){
            filteredProjects = this.state.projects;
        } else {
            filteredProjects = this.state.projects.filter(item => {
                let languagesUsed = item.languagesUsed.some(({name}) => name.includes(event.target.value))
                return languagesUsed
            });

        }
        this.setState({
            filteredProjects: filteredProjects
        })
    }

    render(){
        var {loading} = this.state;
        if (loading){
            return (
                <div className="container">
                    <Helmet>
                        <title>Loading...</title>
                        <meta name="description" content="Irish web developer and programmer, capable in a wide variety of skills and languages. Check me out!" />
                    </Helmet>
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
                    <Helmet>
                        <title>What I've Made - Projects</title>
                        <meta name="description" content="Here's a bunch of cool and creative websites and programs I've made, check them out!" />
                    </Helmet>
                    <div className="projectsPurpleTopBackground" />
                    <p className="projectsTitle">Projects</p>
                    <p className="projectsSubtitle">Take a look at what I've been working on.</p>
                    <div className="buttonsFilter">
                        {this.state.languagesButtons.map((btn, index) =>{
                            return(
                                <div className="btns" >
                                    <input type="image" alt="icon" src={btn.image} title={btn.name} key={index} value={btn.name} onClick={this.filterProjects} />
                                </div>
                            )
                        })
                        
                        }                        
                    </div>
                    <div className="projectsPurpleBottomBackground">
                        <div className="projectsListWrapper">
                            {this.state.filteredProjects.map(project => 
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