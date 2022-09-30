import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 24px;
  height: 100%;
`;
export const ContainerInfoMeals = styled.View`
  width: 100%;
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
  height: 251px;
  margin-bottom: 20px;
  margin-top: 32px;
`;
