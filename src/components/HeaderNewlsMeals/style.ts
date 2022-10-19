import { getPercentVariant } from '@utils/getPercentVariant';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

export const Conatiner = styled(SafeAreaView)`
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
export const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
}))`
  right: 100px;
`;
