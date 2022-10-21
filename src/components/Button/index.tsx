import { Container, Title, IconForButton } from './style';
import { useTheme } from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export type Props = TouchableOpacityProps & {
  title: string;
  nameIcon?: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
  type: 'CONTAINED' | 'OUTLINED';
};

export function Button({ title, nameIcon, onPress, type, ...rest }: Props) {
  return (
    <Container {...rest} onPress={onPress} type={type}>
      <IconForButton name={nameIcon} type={type} />
      <Title type={type}>{title}</Title>
    </Container>
  );
}
