import styled from 'styled-components';
import { colors } from '@app/utils/ui';

export const StyledRoot = styled.button`
  align-items: center;
  background-color: ${colors.secondary.normal};
  border: none;
  border-radius: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 44px;
`;

export const atRightBottom = (WrappedComponent, right, bottom) => (
  styled(WrappedComponent)`
    bottom: ${bottom};
    position: absolute;
    right: ${right};
  `
);
