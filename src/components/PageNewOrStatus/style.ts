import { getPercentVariant } from '@components/Percent/utils/getPercentVariant';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Conatiner = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 132px;
  background-color: ${({ variant }) =>
    getPercentVariant(variant).backgroundColor};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG1}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  justify-content:center;
  align-items: center;
`;
export const Body = styled.View`
  flex: 2;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  margin-top: -20px;
  padding: 24px;
`;
export const ContainerBox = styled.View`
  width: 50%;
  margin-right: 15px;
  flex-direction: row;
`;
export const Form = styled.View`
  width: 100%;
  height: 50px;

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

export const DataCustomer = styled.TextInput``;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
}))``;
