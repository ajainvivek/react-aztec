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
    const OPTION = this.props.library[props.option];
    return (
      <div {...props.attributes}>
        {this.props.control.options.map((option, index) => {
          return (
            <OPTION {...option} key={index} onCheck={this.onCheck}>
              {}
            </OPTION>
          );
        })}
      </div>
    );
  }
}

Checkbox.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onCheck: PropTypes.func
};
export default Checkbox;
