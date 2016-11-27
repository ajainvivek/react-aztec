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
  }, {
    id: 2,
    name: 'title',
    type: 'textfield',
    props: {
      label: 'Hello World!!'
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
  }, {
    id: 3,
    name: 'title',
    type: 'radio',
    options: [{
      id: 1,
      value: 'Male',
      selected: true
    }, {
      id: 2,
      value: 'Female',
      selected: false
    }],
    props: {
      name: 'gender',
      container: 'ul',
      childContainer: 'li'
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
          <DynamicComponent key={index} component={mdl[field.type].type} map={mdl[field.type].map} option={mdl[field.type].options ? mdl[field.type].options.type : '' } control={field} library={MDL} attributes={field.props} />
        ))
      }
    </div>
  );
};

Aztec.propTypes = {

};
export default Aztec;
