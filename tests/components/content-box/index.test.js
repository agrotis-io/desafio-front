import React from 'react';
import { shallow } from 'enzyme';

import ContentBox from '@app/components/content-box';
import {
  StyledActions,
  StyledContent,
  StyledTitle,
} from '@app/components/content-box/styled';

describe('(Given) a ContentBox component', () => {
  const wrapper = shallow(<ContentBox />);

  describe('(When) it has no custom props', () => {
    it('(Should) NOT render a title text', () => {
      expect(wrapper.find(StyledTitle)).not.toExist();
    });

    it('(Should) NOT render actions', () => {
      expect(wrapper.find(StyledActions)).not.toExist();
    });

    it('(Should) NOT render a content', () => {
      expect(wrapper
        .find(StyledContent)
        .children(),
      ).toHaveLength(0);
    });
  });

  describe('(When) it has title', () => {
    const title = 'My content box';

    beforeEach(() => {
      wrapper.setProps({
        title,
      });
    });

    it('(Should) render the title correctly', () => {
      expect(wrapper.find(StyledTitle)).toHaveText(title);
    });
  });

  describe('(When) it has children', () => {
    const childrenComponent = (<span>Content</span>);

    beforeEach(() => {
      wrapper.setProps({
        children: childrenComponent,
      });
    });

    it('(Should) render the children correctly', () => {
      expect(wrapper
        .find(StyledContent)
        .childAt(0),
      ).toMatchElement(childrenComponent);
    });
  });

  describe('(When) it has actions', () => {
    const action = (<button key={1}>Action</button>);

    beforeEach(() => {
      wrapper.setProps({
        actions: [action],
      });
    });

    it('(Should) render the actions correctly', () => {
      expect(wrapper
        .find(StyledActions)
        .children()
      ).toHaveLength(1);

      expect(wrapper
        .find(StyledActions)
        .childAt(0),
      ).toMatchElement(action);
    });
  });
});
