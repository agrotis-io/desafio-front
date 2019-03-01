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

export const StyledHeaderLeft = styled.div`
  display: flex;
`;

export const StyledHeaderRight = styled.div`
  justify-self: flex-end;
`;

export const StyledTitle = styled.h3``;

export const StyledContent = styled.div`
  background-color: white;
  padding: 16px;
`;

export const StyledBackButton = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  padding: 0 16px 0 0;
`;
