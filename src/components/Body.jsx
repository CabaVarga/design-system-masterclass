import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';

const Body = props => (
  <div>
    <Sidebar />
    <MainContent />
  </div>
);

Body.propTypes = {};

export default Body;
