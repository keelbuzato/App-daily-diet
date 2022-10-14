import { getPercentVariant } from '@utils/getPercentVariant';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
`;

export const Hours = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  align-items:center;
  justify-content: center;
  margin-right: 12px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Status = styled.View`
  width: 14px;
  height: 14px;
  background-color: ${({ variant }) =>
    getPercentVariant(variant).backgroundColor};
  border-radius: 100%;
  margin-right: 12px;
`;

export const Divider = styled.View`
  border: 1px solid gray;
  height: 14px;
  margin-right: 12px;
`;

export const ContainerInformation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
