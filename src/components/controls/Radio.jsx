import React, { PropTypes } from 'react';

/** Radio Component */
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(...args) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.control, ...args);
    }
  }
  render() {
    const props = this.props;
    const RADIO = this.props.library[props.component];
    const OPTION = this.props.library[props.option];
    return (
      <div>
        <h3 style={props.attributes.titleStyle}>{props.attributes.title}</h3>
        <RADIO {...props.attributes} onChange={this.onChange}>
          {this.props.control.options.map((option, index) => {
            return (
              <OPTION {...option} key={index}>
                {}
              </OPTION>
            );
          })}
        </RADIO>
      </div>
    );
  }
}

Radio.propTypes = {
  library: PropTypes.object,
  component: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  control: PropTypes.object,
  option: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onChange: PropTypes.func
};
export default Radio;
