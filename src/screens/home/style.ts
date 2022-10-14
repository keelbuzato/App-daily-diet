import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const ContainerInfoMeals = styled.View`
  width: 100%;
  min-height: 550px;
`;
export const ContainerNewMeals = styled.View`
  width: 100%;
  height: 79px;
  margin-top: 46px;
`;

export const Titulo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin-bottom:8px;
`;
export const DayList = styled.View`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 32px;
`;
export const DateList = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG1}px;
  `}
  margin-bottom:10px;
`;
