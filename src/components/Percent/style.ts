import styled, { css } from 'styled-components/native';
import { getPercentVariant } from './utils/getPercentVariant';

export const Container = styled.View`
  width: 100%;
  height: 102px;

  background-color: ${({ variant }) =>
    getPercentVariant(variant).backgroundColor};

  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  align-items:center;
  justify-content: center;
`;
export const Form = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;
