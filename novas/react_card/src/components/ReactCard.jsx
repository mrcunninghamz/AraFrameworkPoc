import React from 'react';
import PropTypes from 'prop-types';

const ReactCard = ({ title }) => <h1>{ title }</h1>;

ReactCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ReactCard;
