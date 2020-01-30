import React from 'react'
import { shallow } from 'enzyme'
import { Conditions } from './Conditions'

describe('The Home component', () => {
  it('renders', () => {
    const result = shallow(<Conditions/>);

    expect(result).toMatchSnapshot();
  });
});
