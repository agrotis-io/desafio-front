import React from 'react';
import ContentBox from '../../../components/content-box';
import List from '../../../components/list';

const mockedItems = [
  { id: 1, name: 'Andamento', description: 'Quando o contrato está em andamento' },
  { id: 2, name: 'Finalizado', description: 'Quando o contrato foi atendido' },
];

const DocumentStatusListContainer = () => (
  <ContentBox title="Situações do documento">
    <List items={mockedItems} />
  </ContentBox>
);

export default DocumentStatusListContainer;