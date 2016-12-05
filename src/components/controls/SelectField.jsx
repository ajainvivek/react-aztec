import React, { PropTypes } from 'react';

/** SelectField Component */
class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: props.attributes.selected
    }
  }
  onChange(...args) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.control, ...args);
    }
    this.setState({
      value: args[2]
    });
  }
  render() {
    const props = this.props;
    const SELECTFIELD = this.props.library[props.component];
    const OPTION = this.props.library[props.option];
    return (
      <SELECTFIELD {...props.attributes} value={this.state.value} onChange={this.onChange}>
        {this.props.control.options.map((option, index) => {
          return (
            <OPTION {...option} key={index}>
              {}
            </OPTION>
          );
        })}
      </SELECTFIELD>
    );
  }
}

SelectField.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onChange: PropTypes.func
};
export default SelectField;
