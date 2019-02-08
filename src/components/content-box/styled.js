import styled from 'styled-components';
import { baseStyles, colors } from 'utils/ui';

export const StyledRoot = styled.article`
  ${baseStyles};
  border: 1px solid ${colors.grey};
`;

export const StyledTitle = styled.header`
  background-color: ${colors.primary.normal};
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 16px;
`;

export const StyledContent = styled.div`
  background-color: white;
  padding: 16px;
`;