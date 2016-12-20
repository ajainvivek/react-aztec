import React, { PropTypes } from 'react';
import validation from './../../helpers/validation';

/** AutoComplete Component */
class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: props.attributes.errorText || '',
      value: props.attributes.value || ''
    };
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);
    this.filter = this.filter.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({
      errorText: props.attributes.errorText || '',
      value: props.attributes.value || ''
    });
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
  filter(...args) {
    if (typeof this.props.filter === 'function') {
      this.props.filter(this.props.control, ...args);
    }
  }
  onUpdateInput(...args) {
    this.setState({
      value: args[0]
    });
    if (typeof this.props.onUpdateInput === 'function') {
      this.props.onUpdateInput(this.props.control, ...args);
    }
  }
  onNewRequest(...args) {
    if (typeof this.props.onNewRequest === 'function') {
      this.props.onNewRequest(this.props.control, ...args);
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
    const filter = (typeof this.props.filter === 'function') ? this.props.filter : AUTOCOMPLETE[props.attributes.filter];
    return <AUTOCOMPLETE {...props.attributes} value={this.state.value} filter={filter} errorText={this.state.errorText} onBlur={this.onBlur} onFocus={this.onFocus} onUpdateInput={this.onUpdateInput} onNewRequest={this.onNewRequest} />;
  }
}

AutoComplete.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onUpdateInput: PropTypes.func,
  onNewRequest: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  filter: PropTypes.func
};
export default AutoComplete;
