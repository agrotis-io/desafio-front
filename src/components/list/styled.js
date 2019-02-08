import styled from 'styled-components';
import { colors } from 'utils/ui';

export const StyledRoot = styled.ul`
  list-style-type: none;
`;

export const StyledItem = styled.li`
  border-radius: 4px;
  border: 1px solid ${colors.grey};
  padding: 16px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledColumn = styled.div`
  display: inline-block;
  width: ${({ width }) => `${width}%` };
`

export const StyledLabel = styled.span`
  color: ${colors.grey};
`;

export const StyledValue = styled.span`
  font-weight: 500;
`;