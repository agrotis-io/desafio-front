import React, { Component } from 'react';
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
  renderItem({ id, name, description }) {
    return (
      <StyledItem key={id}>
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
