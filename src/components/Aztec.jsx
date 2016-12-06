import React, { PropTypes } from 'react';
import _ from 'lodash';
import * as MUI from 'material-ui';
import { Row, Col } from 'pui-react-grids';

import { DynamicComponent } from './DynamicComponent';
import { generateLayout } from './../helpers/filter';
import mui from './../config/mui';

const LIBMap = {
  MUI: {
    map: mui,
    modules: MUI
  }
};

/** Aztec */
export const Aztec = (props) => {
  const config = LIBMap[props.library];
  const layout = generateLayout(props.data);
  return (
    <div>
      {
        layout.wrows.map((row, i) => (
          <Row key={i}>
            {
              row.map((field, index) => (
                <Col xs={field.layout.xs ? field.layout.xs.col : ''} sm={field.layout.sm ? field.layout.sm.col : ''} md={field.layout.md ? field.layout.md.col : ''} lg={field.layout.lg ? field.layout.lg.col : ''} key={index}>
                  <DynamicComponent component={config.map[field.type].type} map={config.map[field.type].map} option={config.map[field.type].options ? config.map[field.type].options.type : '' } control={field} library={config.modules} attributes={field.props} rules={field.rules} onChange={props.onChange} onBlur={props.onBlur} onFocus={props.onFocus} onCheck={props.onCheck} onToggle={props.onToggle} onShow={props.onShow} onDismiss={props.onDismiss} />
                </Col>
              ))
            }
          </Row>
        ))
      }
    </div>
  );
};

Aztec.propTypes = {
  data: PropTypes.array.isRequired,
  library: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
export default Aztec;
