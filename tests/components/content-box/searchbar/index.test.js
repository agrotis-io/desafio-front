import React from 'react';
import { shallow } from 'enzyme';

import ContentBoxSearchbar from '@app/components/content-box/searchbar';
import {
  StyledIcon,
  StyledInput,
} from '@app/components/content-box/searchbar/styled';

describe('(Given) a ContentBoxSearchbar component', () => {
  const wrapper = shallow(<ContentBoxSearchbar />);

  describe('(When) it has no custom props', () => {
    it('(Should) render a search icon', () => {
      const icon = wrapper.find(StyledIcon);
      expect(icon).toExist();
      expect(icon.prop('icon')).toEqual('magnifier');
    });

    it('(Should) render an input field', () => {
      expect(wrapper.find(StyledInput)).toExist();
    });
  });

  describe('(When) it has a placeholder', () => {
    const placeholder = 'Search here...';

    beforeEach(() => {
      wrapper.setProps({
        placeholder,
      });
    });

    it('(Should) pass the placeholder to the input', () => {
      expect(wrapper
        .find(StyledInput)
        .prop('placeholder'),
      ).toEqual(placeholder);
    });
  });

  describe('(When) it has an onSubmit callback', () => {
    const onSubmitMock = jest.fn();

    beforeEach(() => {
      wrapper.setProps({
        onSubmit: onSubmitMock,
      });
    });

    describe('(And) the [ENTER] is pressed', () => {
      const searchInput = 'Search input';
      const evtMock = {
        keyCode: 13,
        target: {
          value: searchInput,
        },
      };

      beforeEach(() => {
        wrapper.find(StyledInput).simulate('keyUp', evtMock);
      });

      it('(Should) call the onSubmit callback', () => {
        expect(onSubmitMock.mock.calls.length).toEqual(1);
        expect(onSubmitMock.mock.calls[0][0]).toBe(evtMock);
        expect(onSubmitMock.mock.calls[0][1]).toEqual(searchInput);
      });
    });
  });
});
