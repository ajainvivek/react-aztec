import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

export default () => (
  <Page>
    <h2>Dynamic Forms</h2>

    <hr />

    <ReactSpecimen span={10}>
      {`
        <div>
          <Aztec data={MUIData} library='MUI' onChange={triggerChange}
           onBlur={triggerBlur} onFocus={triggerFocus} />
        </div>
      `}
    </ReactSpecimen>
  </Page>
);
