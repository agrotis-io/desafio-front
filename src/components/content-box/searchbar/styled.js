import styled from 'styled-components';
import Icon from '@app/components/icon';

export const StyledRoot = styled.div`
  align-items: center;
  background: white;
  box-sizing: border-box;
  display: flex;
  height: 39px;
  padding: 5px 10px;
`;

export const StyledInput = styled.input.attrs({
  type: 'text',
})`
  border: none;
  height: 100%;
`;

export const StyledIcon = styled(Icon)`
  margin-right: 7px;
`;
