import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero.jsx';
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';

const App = props => (
  <div>
    <Hero />
    <NavBar />
    <Body />
  </div>
);

App.propTypes = {};

export default App;
