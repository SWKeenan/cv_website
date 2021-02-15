import React from 'react';
import loader from '../assets/images/loader.gif';
import './Skills.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

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
                    <Helmet>
                        <title>What I Know - Skills</title>
                        <meta name="description" content="A wide variety of skills that I can program in, check them out and see if we match!" />
                    </Helmet>
                    <p className="skillsTitle">Skills</p>
                    <p className="skillsSubtitle">In plain English.</p>
                    <ul className="skillsEnglishUnordered">
                        <li className="skillsEnglishList">I can work with a different CSS frameworks, namely Bootstrap and Bulma. But I prefer and enjoy using regular CSS just fine.</li>
                        <li className="skillsEnglishList">I know a wide variety of languages and frameworks, meaning I'm adaptable and show the ability to learn new skills.</li>
                        <li className="skillsEnglishList">I know how to produce websites, from wireframing and prototyping right up to deploying the finished production.</li>
                        <li className="skillsEnglishList">Working knowledge of JavaScript along with React and Vue libraries with other frameworks (Native/Nextjs).</li>
                        <li className="skillsEnglishList">Importing data into databases such as PostgreSQL, as well as optimizing it to speed up performance.</li>
                        <li className="skillsEnglishList">I can work with APIs, both utilizing external APIs or by creating my own APIs from scratch.</li>
                        <li className="skillsEnglishList">Knows multiple means of deploying the finalized product (Vercel, Netlify, Heroku, Expo).</li>
                        <li className="skillsEnglishList">Good understanding of mobile development, creating websites with mobile thinking first.</li>
                        <li className="skillsEnglishList">I have worked with domains, SSL authentication and navigating web hosting services.</li>
                        <li className="skillsEnglishList">Knows how to filter data on a template, JavaScript and queryset level.</li>
                        <li className="skillsEnglishList">Can build back-end authorization with token authentication.</li>
                        <li className="skillsEnglishList">Key knowledge and implementation of CRUD functionality.</li>
                        <li className="skillsEnglishList">Capable of both front-end and back-end deployment.</li>
                        <li className="skillsEnglishList">Can create e-commerce that utilizes PayPal.</li>
                        <li className="skillsEnglishList">Webscraping data when needed.</li>
                    </ul>
                    <p className="skillsTitle">Languages/Frameworks</p>
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