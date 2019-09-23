import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import parcelLogo from './images/parcel-logo.svg';

describe('Application root', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const text = (
      <div className="center">
        <img src={parcelLogo} alt="parcel" width="200" />
        <h1>Hello React App</h1>
      </div>
    );
    expect(wrapper.contains(text)).toEqual(true);
  });
});
