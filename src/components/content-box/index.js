import React, { Component } from 'react';
import pt from 'prop-types';

import {
  StyledRoot,
  StyledHeader,
  StyledContent,
  StyledActions,
  StyledTitle,
} from './styled';

export default class ContentBox extends Component {
  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
  }

  renderTitle() {
    return (
      <StyledTitle>
        { this.props.title }
      </StyledTitle>
    );
  }

  renderAction(action) {
    return action;
  }

  renderActions() {
    return (
      <StyledActions>
        { this.props.actions.map(this.renderAction) }
      </StyledActions>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <StyledRoot>
        <StyledHeader>
          { this.renderTitle() }
          { this.renderActions() }
        </StyledHeader>
        <StyledContent>
          { children }
        </StyledContent>
      </StyledRoot>
    );
  }
};

ContentBox.propTypes = {
  actions: pt.arrayOf(pt.node),
  children: pt.node,
  title: pt.string,
};
