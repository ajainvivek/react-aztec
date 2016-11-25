import React, { PropTypes } from 'react';
import { DynamicComponent } from './DynamicComponent';

const propTypes = {
};

const fields = [
  {
    id: 1,
    name: 'title',
    type: 'Textfield',
    rules: {
      validation: [
        {
          rule: 'mandatory',
          value: true
        }
      ],
      bot: {}
    }
  }
];

/** Footer */
export const Aztec = (props) => {
  return (
    <div>
      <DynamicComponent component="Textfield" />
    </div>
  );
};

Aztec.propTypes = propTypes;
export default Aztec;
