import React, { Component } from 'react';
import ContentBox from 'components/content-box';
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
    return (
      <ContentBox title="Situações do documento">
        { this.chooseContentComponent() }
      </ContentBox>
    );
  }
}

export default DocumentStatusListContainer;
