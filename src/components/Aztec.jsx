import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Row, Col } from 'pui-react-grids';

import { DynamicComponent } from './DynamicComponent';
import { generateLayout } from './../helpers/filter';
import mui from './../config/mui';
import validation from './../helpers/validation';

const LIBMap = {
  MUI: {
    map: mui
  }
};

let response = {};

const getFieldValue = (...args) => {
  const type = args[0].type;
  let value = null;
  switch (type) {
    case 'textfield':
      value = args[2];
      break;
    case 'selectfield':
      value = args[3];
      break;
    case 'toggle':
      value = args[2];
      break;
    case 'autocomplete':
      value = args[1];
      break;
    case 'datepicker':
      value = args[2];
      break;
    case 'radio':
      value = args[2];
      break;
    case 'checkbox':
      value = args[2];
      break;
    default:
      value = '';
  }
  return value;
};

const getAllMandatoryFields = (fields) => {
  const mandatoryFields = [];
  _.each(fields, (field) => {
    if (field.rules) {
      const isMandatory = _.find(field.rules.validation, { rule: 'mandatory' });
      if (isMandatory) {
        mandatoryFields.push(field);
      }
    }
  });
  return mandatoryFields;
};

const getInitialValues = (fields) => {
  const data = {};
  _.each(fields, (field) => {
    if (field.props.value === undefined) {
      if (response[field.id]) {
        data[field.id] = response[field.id];
      } else {
        data[field.id] = '';
      }
    } else {
      data[field.id] = field.props.value;
    }
  });
  return data;
};

const handleData = (...args) => {
  const val = getFieldValue(...args);
  response[args[0].id] = val;
};

const getCurrentFormData = (fields, errors) => {
  const formData = Object.assign([], fields);
  _.map(formData, (field) => {
    field.props.value = response[field.id];
    const error = _.find(errors, {
      id: field.id
    });
    if (error) {
      field.props.errorText = error.message;
    } else {
      field.props.errorText = '';
    }
  });
  return formData;
};

const handleSubmit = (callback, data) => {
  const fields = data;
  const errors = [];
  const mandatoryFields = getAllMandatoryFields(fields);
  _.each(mandatoryFields, (field, index) => {
    _.each(field.rules.validation, (rule) => {
      const isClean = validation[rule.rule](response[field.id].toString(), rule.value);
      if (!isClean) {
        const error = Object.assign({}, rule, {
          id: field.id
        });
        errors.push(error);
      }
    });
  });
  if (typeof callback === 'function') {
    const currentFormData = getCurrentFormData(fields, errors);
    callback(response, errors, currentFormData);
  }
};

/** Aztec */
export const Aztec = (props) => {
  const config = LIBMap.MUI;
  const layout = generateLayout(props.data);
  config.modules = props.library;
  response = getInitialValues(props.data);
  return (
    <div>
      {
        layout.wrows.map((row, i) => (
          <Row key={i}>
            {
              row.map((field, index) => (
                <Col xs={field.layout.xs ? field.layout.xs.col : ''} sm={field.layout.sm ? field.layout.sm.col : ''} md={field.layout.md ? field.layout.md.col : ''} lg={field.layout.lg ? field.layout.lg.col : ''} style={field.style} className={`${field.className} ${(field.visible === false) ? 'hidden' : 'show'}`} key={index}>
                  <DynamicComponent
                    component={config.map[field.type].type}
                    map={config.map[field.type].map}
                    option={config.map[field.type].options ? config.map[field.type].options.type : ''}
                    control={field}
                    library={config.modules}
                    attributes={field.props}
                    rules={field.rules}
                    formatter={field.formatter}
                    onChange={
                      (...args) => {
                        handleData(...args);
                        props.onChange(...args);
                      }
                    }
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    onCheck={
                      (...args) => {
                        handleData(...args);
                        props.onCheck(...args);
                      }
                    }
                    onToggle={
                      (...args) => {
                        handleData(...args);
                        props.onToggle(...args);
                      }
                    }
                    onShow={props.onShow}
                    onDismiss={props.onDismiss}
                    onTouchTap={props.onTouchTap}
                    onUpdateInput={
                      (...args) => {
                        handleData(...args);
                        props.onUpdateInput(...args);
                      }
                    }
                    onNewRequest={props.onNewRequest}
                    filter={props.filter}
                  />
                </Col>
              ))
            }
          </Row>
        ))
      }
      {
        layout.worows.map((field, index) => (
          <div key={index} style={field.style} className={`${field.className} ${(field.visible === false) ? 'hidden' : 'show'}`}>
            {
              <DynamicComponent
                component={config.map[field.type].type}
                map={config.map[field.type].map}
                option={config.map[field.type].options ? config.map[field.type].options.type : ''}
                control={field}
                library={config.modules}
                attributes={field.props}
                rules={field.rules}
                formatter={field.formatter}
                fetchResponse={props.fetchResponse}
                onChange={
                  (...args) => {
                    handleData(...args);
                    props.onChange(...args);
                  }
                }
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onCheck={
                  (...args) => {
                    handleData(...args);
                    props.onCheck(...args);
                  }
                }
                onToggle={
                  (...args) => {
                    handleData(...args);
                    props.onToggle(...args);
                  }
                }
                onShow={props.onShow}
                onDismiss={props.onDismiss}
                onTouchTap={props.onTouchTap}
                onUpdateInput={
                  (...args) => {
                    handleData(...args);
                    props.onUpdateInput(...args);
                  }
                }
                onNewRequest={props.onNewRequest}
                filter={props.filter}
              />
            }
          </div>
        ))
      }
      <button
        ref={props.formRef}
        onClick={() => {
          handleSubmit(props.onSubmit, props.data);
        }}
        style={{
          display: 'none'
        }}
      >
        {}
      </button>
    </div>
  );
};

Aztec.propTypes = {
  data: PropTypes.array.isRequired,
  library: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onTouchTap: PropTypes.func,
  onCheck: PropTypes.func,
  onToggle: PropTypes.func,
  onShow: PropTypes.func,
  onDismiss: PropTypes.func,
  onUpdateInput: PropTypes.func,
  onNewRequest: PropTypes.func,
  filter: PropTypes.func,
  response: PropTypes.object,
  onSubmit: PropTypes.func,
  formRef: PropTypes.object
};
export default Aztec;
