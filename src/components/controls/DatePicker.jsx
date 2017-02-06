import React, { PropTypes } from 'react';
import moment from 'moment';
import ActionClear from 'material-ui/svg-icons/content/clear';
import { grey500 } from 'material-ui/styles/colors';
import validation from './../../helpers/validation';

function transformAttrs(props) {
  const {
    value,
    minDate,
    maxDate
  } = props.attributes;
  const modifiedAttrs = {
    value: value ? new Date(moment(props.attributes.value).format()) : undefined,
    minDate: minDate ? new Date(moment(props.attributes.minDate).format()) : (minDate === undefined) ? undefined : new Date(),
    maxDate: maxDate ? new Date(moment(props.attributes.maxDate).format()) : (maxDate === undefined) ? undefined : new Date()
  };
  const attrs = Object.assign({}, props.attributes, modifiedAttrs);
  return attrs;
}

/** DatePicker Component */
class DatePicker extends React.Component {
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
    this.formatDate = this.formatDate.bind(this);
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
  formatDate(date) {
    const format = this.props.control.format;
    if (format) {
      return moment(date).format(format);
    }
    return moment(date).format('L');
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
    const attrs = Object.assign({}, this.state.transformedAttrs, {
      value: null
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
    const DATEPICKER = props.library[props.component];
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
        <DATEPICKER {...this.state.attributes} errorText={this.state.errorText} onChange={this.onChange} onFocus={this.onFocus} onShow={this.onShow} onDismiss={this.onDismiss} onTouchTap={this.onTouchTap} formatDate={this.formatDate} />
        <ActionClear color={grey500} style={closeStyle} onClick={this.clear} />
      </div>
    );
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
  onTouchTap: PropTypes.func,
  format: PropTypes.string,
  wrapperStyle: PropTypes.object,
  closeStyle: PropTypes.object
};
export default DatePicker;
