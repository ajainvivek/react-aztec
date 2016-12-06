import React, { PropTypes } from 'react';
import validation from './../../helpers/validation';

/** AutoComplete Component */
class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  validate(value) {
    let isValid = true;
    if (this.props.rules.validation) {
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
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.control, ...args);
    }
  }
  onBlur(...args) {
    const props = this.props;
    const validator = this.validate(args[0].target.value);
    if (!validator.isValid) {
      this.setState({
        errorText: validator.message
      });
    } else {
      this.setState({
        errorText: ''
      });
    }
    if (typeof props.onBlur === 'function') {
      props.onBlur(props.control, ...args);
    }
  }
  onFocus(...args) {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.props.control, ...args);
    }
  }
  render() {
    const props = this.props;
    const AUTOCOMPLETE = props.library[props.component];
    return <AUTOCOMPLETE {...props.attributes} filter={AUTOCOMPLETE[props.attributes.filter]} errorText={this.state.errorText} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} />;
  }
}

AutoComplete.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
export default AutoComplete;
