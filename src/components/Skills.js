import React from 'react';
import loader from '../assets/images/loader.gif';
import './Skills.css';
import axios from 'axios';

export default class Skills extends React.Component{

    state = {
        skills: [],
        loading: true,
    }

    componentDidMount(){
        axios.get('https://shanewkeenan.herokuapp.com/api/languages/')
      .then(res => {
        const skills = res.data;
        this.setState({ skills, loading: false, });
        console.log(skills);
      })
    }
    
    render(){ 
        var {loading} = this.state;
        if (loading){
            return (
                <div className="container">
                    <div className="skillsPurpleBackground" style={{height: '100vh'}}>
                        <div className="loadingScreenWrapper">
                        <div className="loadingScreenTitle">Loading...</div>
                        <p className="loadingScreenSubtitle">Retreiving the data, please wait.</p>
                        <img src={loader} className="loadingScreenImage" alt="loading" />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <p className="skillsTitle">Skills</p>
                    <p className="skillsSubtitle">This is what I've worked with.</p>
                    <div className="skillsPurpleBackground">
                        <div className="skillsListWrapper">
                            {this.state.skills.filter(skill => !skill.name.includes('Y')).map(skill => 
                            <div className="skillsItem">
                                <img src={skill.image} className="skillsItemImage" alt={skill.name} />
                                <div className="skillsItemText" >{skill.name}</div>
                            </div>
                            )
                            }
                        </div>
                        <p className="skillsListText">For something more tangible, take a look at my projects.</p>
                    </div>
                </div>
            )}
        }
}