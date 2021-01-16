import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

const NoMatchRoute = () => <div>404 Page</div>;
function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="navbarContactBox">
            <Link to="/"><li className="navbarContact">Home</li></Link>
            <Link to="/projects"><li className="navbarContact">Projects</li></Link>
            <Link to="/skills"><li className="navbarContact">Skills</li></Link>
            <a href="mailto:shanewilliamkeenan@gmail.com"><li className="navbarContact">Contact</li></a>
          </ul>
        </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/:slug" component={ProjectDetail} />
        <Route component={NoMatchRoute} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
