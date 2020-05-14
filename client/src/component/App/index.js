import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import HomPage from '../../pages/home';
import Doctors from '../../pages/doctors';
import Reservation from '../../pages/reservation';
import history from '../../history';

function App() {
  return (
    <Router history={history}>
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
        <Route path="/reservation">
          <Reservation />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
