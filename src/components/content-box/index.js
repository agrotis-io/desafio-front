import React, { Component, Fragment } from 'react';
import pt from 'prop-types';

import LeftArrowIcon from '@app/components/icon/left-arrow';
import { colors } from '@app/utils/ui';
import { noop } from '@app/utils/helpers';

import {
  StyledRoot,
  StyledHeader,
  StyledContent,
  StyledTitle,
  StyledBackButton,
  StyledHeaderLeft,
  StyledHeaderRight,
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

  renderBackAction() {
    const { onBackActionClick } = this.props;
    return (
      <StyledBackButton onClick={onBackActionClick}>
        <LeftArrowIcon fill={colors.white} height="16" />
      </StyledBackButton>
    );
  }

  renderAction(action) {
    return action;
  }

  renderActions() {
    return (
      <Fragment>
        { this.props.actions.map(this.renderAction) }
      </Fragment>
    );
  }

  render() {
    const { children, hasBackAction } = this.props;
    return (
      <StyledRoot>
        <StyledHeader>
          <StyledHeaderLeft>
            { hasBackAction && this.renderBackAction() }
            { this.hasTitle() && this.renderTitle() }
          </StyledHeaderLeft>
          <StyledHeaderRight>
            { this.hasActions() && this.renderActions() }
          </StyledHeaderRight>
        </StyledHeader>
        <StyledContent>
          { children }
        </StyledContent>
      </StyledRoot>
    );
  }
};

ContentBox.defaultProps = {
  hasBackAction: false,
  onBackActionClick: noop,
};

ContentBox.propTypes = {
  actions: pt.arrayOf(pt.node),
  children: pt.node,
  hasBackAction: pt.bool,
  title: pt.string,
  onBackActionClick: pt.func,
};
