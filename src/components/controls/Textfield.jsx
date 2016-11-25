import React, { PropTypes } from 'react';

/** Aztec */
export const Textfield = (props) => {
  const Field = props.library[props.component];
  return <Field {...props.attributes} />;
};

Textfield.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object
};
export default Textfield;
