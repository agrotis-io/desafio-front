import React from 'react';
import { shallow } from 'enzyme';

import DocumentStatusListContainer from '@app/pages/document-status/containers/DocumentStatusList';
import List from '@app/components/list';
import { mockedDocumentStatuses } from './mocks';

describe('[Given] a DocumentStatusListContainer component', () => {
  const wrapper = shallow(<DocumentStatusListContainer />);

  describe('[When] it has no custom props', () => {
    it('[Should] render a label saying there are no items', () => {
      expect(wrapper.find('span')).toHaveText('Sem itens cadastrados');
    });
  });

  describe('[When] data is present', () => {
    beforeEach(() => {
      wrapper.setProps({
        documentStatuses: mockedDocumentStatuses.records,
      });
    });

    it('[Should] pass items to the List', () => {
      expect(wrapper
        .find(List)
        .prop('items')
      ).toBe(mockedDocumentStatuses.records);
    });
  });
});
