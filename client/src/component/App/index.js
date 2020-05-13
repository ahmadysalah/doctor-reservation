import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import HomPage from '../../pages/home';
import Doctors from '../../pages/doctors';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <HomPage />
        </Route>
        <Route path="/doctors">
          <Doctors />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
