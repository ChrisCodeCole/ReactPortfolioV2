import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AboutContainer from './components/containers/AboutContainer';
import SkillsContainer from './components/containers/SkillsContainer';


const App = () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={AboutContainer} />
      <Route path='/skills' component={SkillsContainer} />
    </Switch>
  </div>
)

export default App;
