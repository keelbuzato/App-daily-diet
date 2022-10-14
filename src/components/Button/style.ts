import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface Props {
  type: 'CONTAINED' | 'OUTLINED';
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  ${({ type }) =>
    type === 'CONTAINED' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_700};
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
      color: ${({ theme }) => theme.COLORS.WHITE};
    `};
  ${({ type }) =>
    type === 'OUTLINED' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    `};
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'CONTAINED' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-left:5px;
`;

export const IconForButton = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'CONTAINED' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
  }),
)``;
