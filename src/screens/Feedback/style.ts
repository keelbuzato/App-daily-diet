import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

export const BoxCenter = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG2}px;
  `}
  text-align:center;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  line-height:20px;
  text-align: center;
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  display: flex;
  margin: 35px;
`;
