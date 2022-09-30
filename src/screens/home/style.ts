import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;
export const ContainerInfoMeals = styled.View`
  width: 100%;
`;
export const ContainerNewMeals = styled.View`
  width: 100%;
  height: 79px;
  margin-top: 46px;
  margin-bottom: 32px;
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
  height: 50px;
`;
