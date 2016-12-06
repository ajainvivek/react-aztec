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
    const OPTION = this.props.library[props.option];
    return (
      <div {...props.attributes}>
        {this.props.control.options.map((option, index) => {
          return (
            <OPTION {...option} key={index} onToggle={this.onToggle}>
              {}
            </OPTION>
          );
        })}
      </div>
    );
  }
}

Toggle.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onToggle: PropTypes.func
};
export default Toggle;
