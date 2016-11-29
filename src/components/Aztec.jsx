import React, { PropTypes } from 'react';
import _ from 'lodash';
import * as MDL from 'react-mdl';
import * as MUI from 'material-ui';
import { Grid, Row, Col, xs, sm, md, lg } from 'react-flexbox-grid/lib/index';
import { DynamicComponent } from './DynamicComponent';
import { generateLayout } from './../helpers/filter';
import mdl from './../config/mdl';
import mui from './../config/mui';

const LIBMap = {
  MDL: {
    map: mdl,
    modules: MDL
  },
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
    <Grid>
      {
        layout.wrows.map((row, i) => (
          <Row key={i}>
            {
              row.map((field, index) => (
                <Col xs={field.layout.xs ? field.layout.xs.col : ''} sm={field.layout.sm ? field.layout.sm.col : ''} md={field.layout.md ? field.layout.md.col : ''} lg={field.layout.lg ? field.layout.lg.col : ''} key={index}>
                  <DynamicComponent component={config.map[field.type].type} map={config.map[field.type].map} option={config.map[field.type].options ? config.map[field.type].options.type : '' } control={field} library={config.modules} attributes={field.props} rules={field.rules} onChange={props.onChange} onBlur={props.onBlur} onFocus={props.onFocus} />
                </Col>
              ))
            }
          </Row>
        ))
      }
    </Grid>
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
