import styled from 'styled-components';
import { colors } from '@app/utils/ui';

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  color: ${colors.grey};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.grey};
  font-size: 16px;
  padding: 5px 0;
`;
