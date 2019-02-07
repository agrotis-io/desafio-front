import React, { Component } from 'react';
import { 
  StyledRoot, 
  StyledItem,
  StyledColumn,
  StyledLabel,
  StyledValue, 
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
    const { items } = this.props;
    return (
      <StyledRoot>
        { items.map(this.renderItem) }
      </StyledRoot>
    );
  }
};