import React from 'react';

import parcelLogo from './images/parcel-logo.svg';

const App = () => (
  <div className="center">
    <img src={parcelLogo} alt="parcel" width="200" />
    <p className="wellcome">Hello React App</p>
  </div>
);

export default App;
