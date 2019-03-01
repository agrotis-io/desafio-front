import React, { Component, Fragment } from 'react';

import ContentBox from '@app/components/content-box';
import Searchbar from '@app/components/content-box/searchbar';
import FloatingActionButton from '@app/components/button/floating-action';
import { atRightBottom } from '@app/components/button/floating-action/styled';
import PlusIcon from '@app/components/icon/plus';
import List from '@app/components/list';
import { colors } from '@app/utils/ui';
import { noop } from '@app/utils/helpers';

const ITEMS_PER_PAGE = 3;

class DocumentStatusListContainer extends Component {
  constructor(props) {
    super(props);
    this.chooseContentComponent = this.chooseContentComponent.bind(this);
    this.fetchDocumentStatuses = this.fetchDocumentStatuses.bind(this);
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      page: 1,
      appliedFilter: null,
    };
  }

  componentDidMount() {
    this.fetchDocumentStatuses({
      pagination: { page: this.state.page },
    });
  }

  fetchDocumentStatuses({ filter, pagination }) {
    this.props.fetchDocumentStatuses({
      pagination: {
        itemsPerPage: ITEMS_PER_PAGE,
        ...pagination,
      },
      filter: { ...filter },
    });
  }

  fetchMoreDocumentStatuses({ filter, pagination }) {
    this.props.fetchMoreDocumentStatuses({
      pagination: {
        itemsPerPage: ITEMS_PER_PAGE,
        ...pagination,
      },
      filter,
    });
  }

  chooseContentComponent() {
    const { documentStatuses } = this.props;
    return (
      documentStatuses.length
        ? this.renderList()
        : this.renderEmptyListMessage()
    );
  }

  handleItemClick(evt, item) {
    const { history: routerHistory } = this.props;
    const { id } = item;
    routerHistory.push(`/edit/${id}`);
  }

  handleLoadMoreClick() {
    const { appliedFilter, page } = this.state;
    const nextPage = (page + 1);

    this.fetchMoreDocumentStatuses({
      pagination: {
        page: nextPage,
      },
      filter: appliedFilter,
    });

    this.setState({
      page: nextPage,
    });
  }

  handleSearchSubmit(event, text) {
    const page = 1;
    const filter = { name: text };

    this.fetchDocumentStatuses({
      pagination: {
        page,
      },
      filter,
    });

    this.setState({
      page,
      appliedFilter: filter,
    });
  }

  renderSearchbar() {
    return (
      <Searchbar
        key="searchbar"
        placeholder="Pesquisar por nome..."
        onSubmit={this.handleSearchSubmit}
      />
    );
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
        onItemClick={this.handleItemClick}
        onLoadMoreClick={this.handleLoadMoreClick}
      />
    );
  }

  renderFAB() {
    const Action = atRightBottom(
      FloatingActionButton,
      '20px',
      '20px',
    );

    return (
      <Action>
        <PlusIcon
          height="17"
          fill={colors.white}
        />
      </Action>
    );
  }

  render() {
    return (
      <Fragment>
        <ContentBox
          actions={[ this.renderSearchbar() ]}
          title="Situações do documento"
        >
          { this.chooseContentComponent() }
        </ContentBox>

        { this.renderFAB() }
      </Fragment>
    );
  }
}

DocumentStatusListContainer.defaultProps = {
  documentStatuses: [],
  fetchDocumentStatuses: noop,
};

export default DocumentStatusListContainer;
