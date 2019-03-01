import styled from 'styled-components';
import { colors } from '@app/utils/ui';

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  width: 100%;
`;

export const StyledItem = styled.li`
  border-radius: 4px;
  border: 1px solid ${colors.grey};
  padding: 16px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  ${({ isLinked }) => isLinked && `
    cursor: pointer;
  `}
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

export const StyledPagination = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-top: 15px;
`

export const StyledLoadMore = styled.button.attrs({
  type: 'button',
})`
  background: none;
  border: none;
  color: ${colors.primary.normal};
  cursor: pointer;
  text-decoration: underline;
`;
