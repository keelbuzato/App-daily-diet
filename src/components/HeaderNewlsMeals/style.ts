import { getPercentVariant } from '@utils/getPercentVariant';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Header = styled.View`
  flex: 1;
  width: 100%;
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
  top: 15px;
`;
export const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  right: 100px;
  top: 15px;
`;
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
}))``;
