import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title.jsx';
import Subtitle from './Subtitle.jsx';

const Heading = props => (
  <div>
    <Title />
    <Subtitle />
  </div>
);

Heading.propTypes = {};

export default Heading;
