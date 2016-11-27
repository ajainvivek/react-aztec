import React, { PropTypes } from 'react';
import _ from 'lodash';

/** Aztec */
export const Radio = (props) => {
  const RADIO = props.library[props.component];
  const OPTION = props.library[props.option];
  const SELECTED = _.find(props.control.options, {
    selected: true
  });
  return (
    <RADIO {...props.attributes} value={SELECTED.value}>
      {props.control.options.map((option, index) => {
        return (
          <OPTION {...option} key={index}>
            {option.value}
          </OPTION>
        );
      })}
    </RADIO>
  );
};

Radio.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired
};
export default Radio;
