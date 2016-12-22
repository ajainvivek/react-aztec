import React, { PropTypes } from 'react';

/** Toggle Component */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }
  onToggle(...args) {
    if (typeof this.props.onToggle === 'function') {
      this.props.onToggle(this.props.control, ...args);
    }
  }
  render() {
    const props = this.props;
    const TOGGLE = props.library[props.component];
    return (
      <TOGGLE {...props.attributes} onToggle={this.onToggle} />
    );
  }
}

Toggle.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  rules: PropTypes.object,
  onToggle: PropTypes.func
};
export default Toggle;
