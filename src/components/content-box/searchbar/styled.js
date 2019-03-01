import styled from 'styled-components';
import MagnifierIcon from '@app/components/icon/magnifier';

export const StyledRoot = styled.div`
  align-items: center;
  background: white;
  box-sizing: border-box;
  display: flex;
  height: 30px;
  margin: -5px 0; /* negative so that it overrides title's padding */
  padding: 5px 10px;
`;

export const StyledInput = styled.input.attrs({
  type: 'text',
})`
  border: none;
  height: 100%;
`;

export const StyledIcon = styled(MagnifierIcon)`
  margin-right: 7px;
`;
