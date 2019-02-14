import React from 'react';
import Icon from 'components/icon';
import { StyledRoot } from './styled';

const FloatingActionButton = ({ icon, className, type, onClick }) => (
  <StyledRoot
    className={className}
    type={type}
    onClick={onClick}
  >
    <Icon icon={icon} />
  </StyledRoot>
)

FloatingActionButton.defaultProps = {
  type: 'button',
};

export default FloatingActionButton;
