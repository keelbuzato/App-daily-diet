import styled, { css } from 'styled-components/native';
import { getPercentVariant } from './utils/getPercentVariant';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  max-width: 100%;
  height: 110px;
  padding: 16px;
  background-color: ${({ variant }) =>
    getPercentVariant(variant).backgroundColor};

  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  flex-wrap:wrap;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  flex-wrap:wrap;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;
export const ContainerButtoIcon = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
}))``;
