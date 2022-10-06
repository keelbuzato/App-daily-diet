import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-left:5px;
`;

export const IconForButton = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;
