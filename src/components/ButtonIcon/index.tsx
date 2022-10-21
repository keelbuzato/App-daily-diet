import { TouchableOpacityProps } from 'react-native';
import { Container, TypeIconProps, Icon } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

type Props = TouchableOpacityProps & {
  type?: TypeIconProps;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};

export function ButtonIcon({
  icon,
  type = 'PRIMARY',
  onPress,
  ...rest
}: Props) {
  return (
    <Container {...rest} onPress={onPress}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
