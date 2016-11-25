import React, { PropTypes } from 'react';
import * as MDL from 'react-mdl';

export const DynamicComponent = (props) => {
  const CustomComponent = MDL[props.component];
  return <CustomComponent label="Text..." />;
};

DynamicComponent.propTypes = {
  component: PropTypes.string.isRequired
};

export default DynamicComponent;
