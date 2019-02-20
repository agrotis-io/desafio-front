import React from 'react';
import pt from 'prop-types';

import Icon from 'components/icon';
import { StyledRoot } from './styled';

const FloatingActionButton = ({ icon, className, type, onClick }) => (
  <StyledRoot
    className={className}
    type={type}
    onClick={onClick}
  >
    <Icon icon={icon} bg="white" />
  </StyledRoot>
)

FloatingActionButton.defaultProps = {
  type: 'button',
};

FloatingActionButton.propTypes = {
  className: pt.string,
  icon: pt.string.isRequired,
  type: pt.string,
};

export default FloatingActionButton;
