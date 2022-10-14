import { getPercentVariant } from '@utils/getPercentVariant';
import styled, { css } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerPercentStatistic = styled.View`
  flex: 1;
  width: 100%;
  height: ${RFPercentage(37)}px;
  background-color: ${({ variant }) =>
    getPercentVariant(variant).backgroundColor};
`;
export const ContainerGeneralStatistic = styled.View`
  flex: 2;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  margin-top: -100px;
  padding: 24px;
`;

export const OrganizingBox = styled.View`
  margin-top: 23px;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
  text-align: center;
`;
export const ContainerDuploBox = styled.View`
  flex-direction: row;
  max-width: 100%;
  width: 100%;
`;
export const DataValue = styled.View`
  flex: 1;
  text-align: center;
  padding: 40px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  text-align: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  text-align: center;
  top: 9px;
`;
