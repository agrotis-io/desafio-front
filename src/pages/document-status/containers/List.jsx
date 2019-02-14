import React, { Component, Fragment } from 'react';
import ContentBox from 'components/content-box';
import FloatingActionButton from 'components/button/floating-action';
import { atRightBottom } from 'components/button/floating-action/styled';
import List from 'components/list';

class DocumentStatusListContainer extends Component {
  constructor(props) {
    super(props);
    this.chooseContentComponent = this.chooseContentComponent.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchDocumentStatuses();
  }

  chooseContentComponent() {
    const { documentStatuses } = this.props;
    return (
      documentStatuses.length
        ? <List items={documentStatuses} />
        : <span>Sem itens cadastrados</span>
    );
  }

  render() {
    const FabAtRightBottom = atRightBottom(
      FloatingActionButton,
      '20px',
      '20px',
    );

    return (
      <Fragment>
        <ContentBox title="Situações do documento">
          { this.chooseContentComponent() }
        </ContentBox>
        <FabAtRightBottom icon="plus" />
      </Fragment>
    );
  }
}

export default DocumentStatusListContainer;
