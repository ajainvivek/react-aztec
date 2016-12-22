import React, { PropTypes } from 'react';

/** Label Component */
const Label = props => (
  <div {...props.attributes}>
    <span>{props.attributes.text}</span>
  </div>
);

Label.propTypes = {
  attributes: PropTypes.object
};
export default Label;
