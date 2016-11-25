import React, { PropTypes } from 'react';
import * as Controls from './controls/index';

export const DynamicComponent = (props) => {
  const CustomComponent = Controls.default[props.component];
  return <CustomComponent {...props} />;
};

DynamicComponent.propTypes = {
  component: PropTypes.string.isRequired
};

export default DynamicComponent;
