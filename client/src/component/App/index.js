import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import HomPage from '../../pages/home';
import Doctors from '../../pages/doctors';
import Reservation from '../../pages/reservation';
import history from '../../history';
import ControlPanel from '../../pages/controlPanel';
import Footer from '../footer';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomPage />
          <Footer />
        </Route>
        <Route path="/doctors">
          <Header />
          <Doctors />
          <Footer />
        </Route>
        <Route path="/reservation">
          <Header />
          <Reservation />
          <Footer />
        </Route>
        <Route exact path="/CP">
          <ControlPanel />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
