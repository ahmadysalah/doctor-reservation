import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import HomPage from '../../pages/home';
import Doctors from '../../pages/doctors';
import AboutUs from '../../pages/about';
import Reservation from '../../pages/reservation';
import ControlPanel from '../../pages/controlPanel';
import CovidNews from '../../pages/covid';
import Footer from '../footer';
import './App.css';

function App() {
  // make all links by react router
  // and put the header and footer component in the pages
  // except the control panel
  return (
    <Router>
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
        <Route path="/about">
          <Header />
          <AboutUs />
          <Footer />
        </Route>
        <Route exact path="/covid">
          <Header />
          <CovidNews />
          <Footer />
        </Route>
        <Route exact path="/CP">
          <ControlPanel />
        </Route>
        <Route path="/*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
