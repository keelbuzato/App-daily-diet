import theme from '@utils/index';
import styled, { css } from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import { PercentVariant } from '@utils/getPercentVariant';

interface Props {
  type: PercentVariant;
}

interface ButtonProps extends Props {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 48%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  border-radius: 8px;

  ${({ isActive, type }) =>
    isActive &&
    type === PercentVariant.primary &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
      border: 1px solid ${({ theme }) => theme.COLORS.GREEN_DARK};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === PercentVariant.secundary &&
    css`
      background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
      border: 1px solid ${({ theme }) => theme.COLORS.RED_DARK};
    `};
`;
export const Status = styled(View)<Props>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, type }) =>
    type === PercentVariant.primary
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  margin-right: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
