import { TextProps, Text } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const ContainerInput = styled.TextInput`
  width: 100%;
  max-width: 100%;
  height: 48px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  border-radius:6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 8px;
`;

export const Titulo = styled(Text)<TextProps>`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-bottom:4px;
`;
