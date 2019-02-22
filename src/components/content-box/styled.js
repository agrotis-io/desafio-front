import styled from 'styled-components';
import { baseStyles, colors } from '@app/utils/ui';

export const StyledRoot = styled.article`
  ${baseStyles};
  border: 1px solid ${colors.grey};
`;

export const StyledHeader = styled.header`
  align-items: center;
  background-color: ${colors.primary.normal};
  color: white;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  padding: 16px;
`;

export const StyledTitle = styled.h3``;

export const StyledActions = styled.div`
  justify-self: flex-end;
`;

export const StyledContent = styled.div`
  background-color: white;
  padding: 16px;
`;
