import React, { PropTypes } from 'react';

/** Checkbox Component */
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
  }
  onCheck(...args) {
    if (typeof this.props.onCheck === 'function') {
      this.props.onCheck(this.props.control, ...args);
    }
  }
  render() {
    const props = this.props;
    const CHECKBOX = props.library[props.component];
    return (
      <CHECKBOX {...props.attributes} onCheck={this.onCheck} />
    );
  }
}

Checkbox.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  rules: PropTypes.object,
  onCheck: PropTypes.func
};
export default Checkbox;
