import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => <div />;

Heading.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Heading;
