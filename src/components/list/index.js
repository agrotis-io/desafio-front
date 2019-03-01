import React, { Component } from 'react';
import pt from 'prop-types';
import { noop } from '@app/utils/helpers';

import {
  StyledRoot,
  StyledList,
  StyledItem,
  StyledColumn,
  StyledLabel,
  StyledValue,
  StyledPagination,
  StyledLoadMore,
} from './styled';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    const { id, name, description } = item;
    const { onItemClick } = this.props;

    return (
      <StyledItem
        key={id}
        isLinked={onItemClick !== noop}
        onClick={(evt) => onItemClick(evt, item)}
      >
        <StyledColumn width="35">
          <StyledLabel>Nome: </StyledLabel>
          <StyledValue>{ name }</StyledValue>
        </StyledColumn>
        <StyledColumn width="65">
          <StyledLabel>Descrição: </StyledLabel>
          <StyledValue>{ description }</StyledValue>
        </StyledColumn>
      </StyledItem>
    );
  }

  render() {
    const {
      hasPagination,
      items,
      loadMoreLabel,
      totalItems,
      onLoadMoreClick,
    } = this.props;

    return (
      <StyledRoot>
        <StyledList>
          { items.map(this.renderItem) }
        </StyledList>

        <StyledPagination>
          { hasPagination &&
            <StyledLoadMore onClick={onLoadMoreClick}>
              { loadMoreLabel }
            </StyledLoadMore>
          }
          <span>
            { `(${items.length} - ${totalItems})` }
          </span>
        </StyledPagination>
      </StyledRoot>
    );
  }
};

List.defaultProps = {
  hasPagination: false,
  loadMoreLabel: 'Carregar mais...',
  onItemClick: noop,
  onLoadMoreClick: noop,
};

List.propTypes = {
  hasPagination: pt.bool,
  items: pt.array.isRequired,
  loadMoreLabel: pt.string,
  totalItems: pt.number,
  onItemClick: pt.func,
  onLoadMoreClick: pt.func,
};
