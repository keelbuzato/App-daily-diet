import styled, { css } from 'styled-components/native';
import { getPercentVariant, PercentVariant } from '@utils/getPercentVariant';

export const Container = styled.View`
  flex: 1;
  background-color: yellow;
  border-radius: 20px;
`;
export const ContainerBody = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  margin-top: -30px;
  padding: 24px;
`;

export const Titulo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG2}px;
  `}
  margin-bottom:8px;
`;

export const Descripition = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const DescriptionDateAndHours = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ContainerFooter = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ContainerStatus = styled.View`
  width: 127px;
  height: 34px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
export const Status = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${({ variant, theme }) =>
    variant === PercentVariant.primary
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};

  border-radius: 100px;
  margin-right: 8px;
`;
export const DescriptionStatus = styled.Text``;
