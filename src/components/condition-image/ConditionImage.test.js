import React from 'react'
import { shallow } from 'enzyme'
import ConditionImage from './ConditionImage'

describe('The GithubLink component', () => {
  it('renders', () => {
    const result = shallow(<ConditionImage/>);

    expect(result).toMatchSnapshot();
  });
});
