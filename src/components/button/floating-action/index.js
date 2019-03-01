import React from 'react';
import pt from 'prop-types';

import { noop } from '@app/utils/helpers';
import { StyledRoot } from './styled';

const FloatingActionButton = ({ children, className, type, onClick }) => (
  <StyledRoot
    className={className}
    type={type}
    onClick={onClick}
  >
    { children }
  </StyledRoot>
)

FloatingActionButton.defaultProps = {
  type: 'button',
  onClick: noop,
};

FloatingActionButton.propTypes = {
  className: pt.string,
  type: pt.string,
  onClick: pt.func,
};

export default FloatingActionButton;
