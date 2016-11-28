import React, { PropTypes } from 'react';
import * as MDL from 'react-mdl';
import * as MUI from 'material-ui';
import { DynamicComponent } from './DynamicComponent';
import mdl from './../config/mdl';
import mui from './../config/mui';

const LIBMap = {
  MDL: {
    map: mdl,
    modules: MDL
  },
  MUI: {
    map: mui,
    modules: MUI
  }
};


/** Aztec */
export const Aztec = (props) => {
  const config = LIBMap[props.library];
  return (
    <div>
      {
        props.data.map((field, index) => (
          <DynamicComponent key={index} component={config.map[field.type].type} map={config.map[field.type].map} option={config.map[field.type].options ? config.map[field.type].options.type : '' } control={field} library={config.modules} attributes={field.props} rules={field.rules} onChange={props.onChange} onBlur={props.onBlur} onFocus={props.onFocus} />
        ))
      }
    </div>
  );
};

Aztec.propTypes = {
  data: PropTypes.array.isRequired,
  library: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
export default Aztec;
