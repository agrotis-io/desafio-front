import React from 'react';

import {
  StyledRoot,
  StyledLabel,
  StyledInput,
} from './styled';

const Field = ({
  className,
  id,
  isRequired,
  label,
  style,
  ...rest,
}) => (
  <StyledRoot
    className={className}
    style={style}
  >
    <StyledLabel htmlFor={id}>
      { label }
      { isRequired && ' *' }
    </StyledLabel>
    <StyledInput
      id={id}
      {...rest}
    />
  </StyledRoot>
);

export default Field;
