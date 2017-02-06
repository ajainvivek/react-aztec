import React, { PropTypes } from 'react';
import moment from 'moment';
import validation from './../../helpers/validation';
import ActionClear from 'material-ui/svg-icons/content/clear';
import { grey500 } from 'material-ui/styles/colors';

function transformAttrs(props) {
  const {
    value
  } = props.attributes;
  const modifiedAttrs = {
    value: value ? new Date(moment(props.attributes.value).format()) : null
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
      attributes: props ? transformAttrs(props) : {},
      transformedAttrs: props ? transformAttrs(props) : {}
    };
    this.onChange = this.onChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onShow = this.onShow.bind(this);
    this.onTouchTap = this.onTouchTap.bind(this);
    this.clear = this.clear.bind(this);
  }
  componentWillReceiveProps(props) {
    const attrs = transformAttrs(props);
    this.setState({
      attributes: attrs,
      transformedAttrs: attrs
    });
  }
  onShow(...args) {
    if (typeof this.props.onShow === 'function') {
      this.props.onShow(this.props.control, ...args);
    }
  }
  onChange(...args) {
    const attrs = Object.assign({}, this.state.transformedAttrs, {
      value: args[1]
    });
    this.setState({
      attributes: attrs
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
  clear() {
    const attrs = Object.assign({}, this.state.attributes, {
      value: {}
    });
    this.setState({
      attributes: attrs
    });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.control, null, null);
    }
  }
  render() {
    const props = this.props;
    const TIMEPICKER = props.library[props.component];
    const wrapperStyle = Object.assign({}, {
      position: 'relative',
      display: props.attributes.clear ? 'inline-block' : ''
    }, props.attributes.wrapperStyle);
    const closeStyle = Object.assign({}, {
      position: 'absolute',
      right: 0,
      top: '12px',
      cursor: 'pointer',
      display: props.attributes.clear ? 'block' : 'none'
    }, props.attributes.closeStyle);
    return (
      <div style={wrapperStyle}>
        <TIMEPICKER {...this.state.attributes} errorText={this.state.errorText} onChange={this.onChange} onFocus={this.onFocus} onShow={this.onShow} onDismiss={this.onDismiss} onTouchTap={this.onTouchTap} />
        <ActionClear color={grey500} style={closeStyle} onClick={this.clear} />
      </div>
    );
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
  onTouchTap: PropTypes.func,
  wrapperStyle: PropTypes.object,
  closeStyle: PropTypes.object
};
export default TimePicker;
