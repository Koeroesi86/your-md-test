import React from 'react'
import { shallow } from 'enzyme'
import LoadingIndicator from './LoadingIndicator'

describe('The LoadingIndicator component', () => {
  it('renders', () => {
    const result = shallow(<LoadingIndicator/>);

    expect(result).toMatchSnapshot();
  });
});
