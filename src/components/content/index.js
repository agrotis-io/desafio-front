import React from 'react';
import pt from 'prop-types';

import { StyledRoot } from './styled';

const Content = ({ children }) => (
  <StyledRoot>
    { children }
  </StyledRoot>
);

Content.propTypes = {
  children: pt.node,
}

export default Content;
