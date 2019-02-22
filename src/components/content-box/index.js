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
    this.hasActions = this.hasActions.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  hasActions() {
    const { actions } = this.props;
    return (actions && actions.length > 0);
  }

  hasTitle() {
    const { title } = this.props;
    return (title && title.length > 0);
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
          { this.hasTitle() && this.renderTitle() }
          { this.hasActions() && this.renderActions() }
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
