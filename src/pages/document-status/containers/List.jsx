import React, { Component, Fragment } from 'react';
import ContentBox from 'components/content-box';
import FloatingActionButton from 'components/button/floating-action';
import { atRightBottom } from 'components/button/floating-action/styled';
import List from 'components/list';

class DocumentStatusListContainer extends Component {
  constructor(props) {
    super(props);
    this.chooseContentComponent = this.chooseContentComponent.bind(this);
    this.fetchDocumentStatuses = this.fetchDocumentStatuses.bind(this);
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);

    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchDocumentStatuses(this.state.page);
  }

  chooseContentComponent() {
    const { documentStatuses } = this.props;
    return (
      documentStatuses.length
        ? this.renderList()
        : this.renderEmptyListMessage()
    );
  }

  fetchDocumentStatuses(page) {
    this.props.fetchDocumentStatuses({
      itemsPerPage: 3,
      page,
    });
  }

  handleLoadMoreClick() {
    const nextPage = (this.state.page + 1);
    this.fetchDocumentStatuses(nextPage);
    this.setState({
      page: nextPage,
    });
  }

  renderEmptyListMessage() {
    return (
      <span>Sem itens cadastrados</span>
    );
  }

  renderList() {
    const { documentStatuses, totalStatuses } = this.props;
    return (
      <List
        hasPagination={documentStatuses.length < totalStatuses}
        items={documentStatuses}
        loadMoreLabel="Carregar mais..."
        totalItems={totalStatuses}
        onLoadMoreClick={this.handleLoadMoreClick}
      />
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
