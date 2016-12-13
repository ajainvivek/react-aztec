import React, { PropTypes } from 'react';
import validation from './../../helpers/validation';

/** DatePicker Component */
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onShow = this.onShow.bind(this);
    this.onTouchTap = this.onTouchTap.bind(this);
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
  onShow(...args) {
    if (typeof this.props.onShow === 'function') {
      this.props.onShow(this.props.control, ...args);
    }
  }
  onChange(...args) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.control, ...args);
    }
  }
  onDismiss(...args) {
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
    if (typeof props.onDismiss === 'function') {
      props.onDismiss(props.control, ...args);
    }
  }
  onFocus(...args) {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.props.control, ...args);
    }
  }
  onTouchTap(...args) {
    if (typeof this.props.onTouchTap === 'function') {
      this.props.onTouchTap(this.props.control, ...args);
    }
  }
  render() {
    const props = this.props;
    const DATEPICKER = props.library[props.component];
    return <DATEPICKER {...props.attributes} errorText={this.state.errorText} onChange={this.onChange} onFocus={this.onFocus} onShow={this.onShow} onDismiss={this.onDismiss} onTouchTap={this.onTouchTap} />;
  }
}

DatePicker.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onDismiss: PropTypes.func,
  onShow: PropTypes.func,
  onTouchTap: PropTypes.func
};
export default DatePicker;
