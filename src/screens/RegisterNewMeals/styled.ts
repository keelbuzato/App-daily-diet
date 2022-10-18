import styled, { css } from 'styled-components/native';

export const Teste = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  padding: 24px 24px 0px 24px;
  border-radius: 20px;
`;

export const ContainerBox = styled.View`
  width: 50%;
  margin-right: 15px;
  flex-direction: row;
`;
export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 148px;
`;

export const Question = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
