import React, { Fragment } from 'react';

import parcelLogo from './images/parcel-logo.svg';

const App = () => (
  <Fragment>
    <img src={parcelLogo} alt="parcel" width="200" />
    <h1 class="black">Hello Parcel React</h1>
  </Fragment>
);

export default App;
