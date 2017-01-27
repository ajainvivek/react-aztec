import React, { PropTypes } from 'react';
import validation from './../../helpers/validation';

/** SelectField Component */
class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.attributes.selected,
      errorText: props.attributes.errorText || ''
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(props) {
    this.state = {
      value: props.attributes.selected,
      errorText: props.attributes.errorText || ''
    };
  }
  validate(value) {
    let isValid = true;
    if (this.props.rules && this.props.rules.validation) {
      for (const data of this.props.rules.validation) {
        isValid = validation[data.rule](value, data.value);
        if (!isValid) {
          return {
            isValid: false,
            message: data.message
          };
        }
      }
    }
    return {
      isValid: true,
      message: ''
    };
  }
  onChange(...args) {
    const validator = this.validate(args[2]);
    if (!validator.isValid) {
      this.setState({
        errorText: validator.message,
        value: args[2]
      });
    } else {
      this.setState({
        errorText: '',
        value: args[2]
      });
    }
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.control, ...args);
    }
  }
  render() {
    const props = this.props;
    const SELECTFIELD = this.props.library[props.component];
    const OPTION = this.props.library[props.option];
    return (
      <SELECTFIELD {...props.attributes} value={this.state.value} errorText={this.state.errorText} onChange={this.onChange}>
        {this.props.control.options.map((option, index) => {
          return (
            <OPTION {...option} key={index}>
              {}
            </OPTION>
          );
        })}
      </SELECTFIELD>
    );
  }
}

SelectField.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onChange: PropTypes.func
};
export default SelectField;
