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

window.aztec_response = window.aztec_response || {};

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
    case 'timepicker':
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
      if (window.aztec_response[field.id]) {
        data[field.id] = window.aztec_response[field.id];
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
  window.aztec_response[args[0].id] = val;
};

const updateResponse = (fields) => {
  _.each(fields, (field) => {
    if (field.props.value === undefined || field.props.value === null || field.props.value === '') {
      window.aztec_response[field.id] = window.aztec_response[field.id] || field.props.defaultSelected || field.props.defaultChecked || field.props.defaultToggled || field.props.selected || '';
    } else {
      window.aztec_response[field.id] = field.props.value;
    }
  });
};

const getCurrentFormData = (fields, errors) => {
  const formData = Object.assign([], fields);
  _.map(formData, (field) => {
    if (field.type === 'selectfield') {
      field.props.selected = window.aztec_response[field.id];
    } else {
      field.props.value = window.aztec_response[field.id];
    }
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

const getErrors = (fields) => {
  const mandatoryFields = getAllMandatoryFields(fields);
  const errors = [];
  _.each(mandatoryFields, (field, index) => {
    _.each(field.rules.validation, (rule) => {
      const isClean = validation[rule.rule](window.aztec_response[field.id].toString(), rule.value);
      if (!isClean) {
        const error = Object.assign({}, rule, {
          id: field.id
        });
        errors.push(error);
      }
    });
  });
  return errors;
};

const handleSubmit = (callback, data) => {
  const fields = data;
  const errors = getErrors(data);
  if (typeof callback === 'function') {
    const currentFormData = getCurrentFormData(fields, errors);
    updateResponse(fields);
    callback(window.aztec_response, errors, currentFormData);
  }
};

/** Aztec */
export const Aztec = (props) => {
  const config = LIBMap.MUI;
  let data = props.data;
  if (!props.forceUpdate) {
    let errors = [];
    if (props.displayErrors) {
      errors = getErrors(props.data);
    }
    window.aztec_response = getInitialValues(data);
    updateResponse(props.data);
    data = getCurrentFormData(props.data, errors);
  }
  const layout = generateLayout(data);
  config.modules = props.library;
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
                        if (typeof props.onChange === 'function') {
                          props.onChange(...args);
                        }
                      }
                    }
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    onCheck={
                      (...args) => {
                        handleData(...args);
                        if (typeof props.onCheck === 'function') {
                          props.onCheck(...args);
                        }
                      }
                    }
                    onToggle={
                      (...args) => {
                        handleData(...args);
                        if (typeof props.onToggle === 'function') {
                          props.onToggle(...args);
                        }
                      }
                    }
                    onShow={props.onShow}
                    onDismiss={props.onDismiss}
                    onTouchTap={props.onTouchTap}
                    onUpdateInput={
                      (...args) => {
                        handleData(...args);
                        if (typeof props.onUpdateInput === 'function') {
                          props.onUpdateInput(...args);
                        }
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
                    if (typeof props.onChange === 'function') {
                      props.onChange(...args);
                    }
                  }
                }
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onCheck={
                  (...args) => {
                    handleData(...args);
                    if (typeof props.onCheck === 'function') {
                      props.onCheck(...args);
                    }
                  }
                }
                onToggle={
                  (...args) => {
                    handleData(...args);
                    if (typeof props.onToggle === 'function') {
                      props.onToggle(...args);
                    }
                  }
                }
                onShow={props.onShow}
                onDismiss={props.onDismiss}
                onTouchTap={props.onTouchTap}
                onUpdateInput={
                  (...args) => {
                    handleData(...args);
                    if (typeof props.onUpdateInput === 'function') {
                      props.onUpdateInput(...args);
                    }
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
          handleSubmit(props.onSubmit, data);
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
  onSubmit: PropTypes.func,
  formRef: PropTypes.func,
  forceUpdate: PropTypes.bool,
  displayErrors: PropTypes.bool
};
export default Aztec;
