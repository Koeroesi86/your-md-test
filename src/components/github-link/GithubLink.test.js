import React from 'react'
import { shallow } from 'enzyme'
import GithubLink from './GithubLink'

describe('The GithubLink component', () => {
  it('renders', () => {
    const result = shallow(<GithubLink/>);

    expect(result).toMatchSnapshot();
  });
});
