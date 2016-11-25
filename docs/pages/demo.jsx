import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

export default () => (
  <Page>
    <h2>My Buttons</h2>

    <p>Are so nice</p>

    <ul>
      <li>Yes</li>
      <li>or no</li>
    </ul>

    <hr />

    <ReactSpecimen span={3}>
      {`
        <Aztec />
      `}
    </ReactSpecimen>
  </Page>
);
