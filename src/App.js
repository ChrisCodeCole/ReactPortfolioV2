import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AboutContainer from './components/containers/AboutContainer';
import SkillsContainer from './components/containers/SkillsContainer';
import ProjectsContainer from './components/containers/ProjectsContainer';
import ContactContainer from './components/containers/ContactContainer';


const App = () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={AboutContainer} />
      <Route path='/skills' component={SkillsContainer} />
      <Route path='/projects' component={ProjectsContainer} />
      <Route path='/contact' component={ContactContainer} />
    </Switch>
  </div>
)

export default App;
