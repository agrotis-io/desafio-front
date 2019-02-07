import React from 'react';
import {
  StyledRoot,
  StyledTitle,
  StyledContent,
} from './styled';

const ContentBox = ({ children, title }) => (
  <StyledRoot>
    <StyledTitle>
      { title }
    </StyledTitle>
    <StyledContent>
      { children }
    </StyledContent>
  </StyledRoot>
);

export default ContentBox;