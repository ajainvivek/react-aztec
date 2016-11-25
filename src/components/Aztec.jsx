import React, { PropTypes } from 'react';
import * as MDL from 'react-mdl';
import { DynamicComponent } from './DynamicComponent';
import mdl from './../config/mdl';

const fields = [
  {
    id: 1,
    name: 'title',
    type: 'textfield',
    props: {
      label: 'Text'
    },
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

/** Aztec */
export const Aztec = (props) => {
  return (
    <div>
      {
        fields.map((field, index) => (
          <DynamicComponent key={index} component={mdl[field.type].type} library={MDL} type="mdl" attributes={field.props} />
        ))
      }
    </div>
  );
};

Aztec.propTypes = {

};
export default Aztec;
