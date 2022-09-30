import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const DateList = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG1}px;
  `}
  margin-bottom:8px
`;
