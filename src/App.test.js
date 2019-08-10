import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import App from './App';

import parcelLogo from './images/parcel-logo.svg';

describe('Application root', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const text = (
      <Fragment>
        <img src={parcelLogo} alt="parcel" width="200" />
        <h1>Hello Parcel React</h1>
      </Fragment>
    );
    expect(wrapper.contains(text)).toEqual(true);
  });
});
