import React, { PropTypes } from 'react';
import moment from 'moment';
import validation from './../../helpers/validation';

function transformAttrs(props) {
  const {
    value
  } = props.attributes;
  const modifiedAttrs = {
    value: value ? new Date(moment(props.attributes.value).format()) : undefined
  };
  const attrs = Object.assign({}, props.attributes, modifiedAttrs);
  return attrs;
}

/** TimePicker Component */
class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: '',
      attributes: props ? transformAttrs(props) : {}
    };
    this.onChange = this.onChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onShow = this.onShow.bind(this);
    this.onTouchTap = this.onTouchTap.bind(this);
  }
  componentWillReceiveProps(props) {
    const attrs = transformAttrs(props);
    this.setState({
      attributes: attrs
    });
  }
  onShow(...args) {
    if (typeof this.props.onShow === 'function') {
      this.props.onShow(this.props.control, ...args);
    }
  }
  onChange(...args) {
    this.setState({
      attributes: {
        value: args[1]
      }
    });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.control, ...args);
    }
  }
  onDismiss(...args) {
    if (!args[0]) return;
    const props = this.props;
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
    const TIMEPICKER = props.library[props.component];
    return <TIMEPICKER {...props.attributes} errorText={this.state.errorText} onChange={this.onChange} onFocus={this.onFocus} onShow={this.onShow} onDismiss={this.onDismiss} onTouchTap={this.onTouchTap} />;
  }
}

TimePicker.propTypes = {
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
export default TimePicker;
