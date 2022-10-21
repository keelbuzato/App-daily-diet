import {
  Container,
  Description,
  Value,
  Form,
  ContainerButtoIcon,
  Icon,
} from './style';
import { PercentVariant } from '../../utils/getPercentVariant';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps, TextProps } from 'react-native';
import React from 'react';

type IconProps = keyof typeof MaterialIcons.glyphMap;

type props = TouchableOpacityProps & {
  value: number;
  description: string;
  variant: PercentVariant;
  icon?: IconProps;
  onPress?: () => void;
};

export function Percent({
  value,
  variant,
  description,
  onPress,
  icon,
  ...rest
}: props) {
  return (
    <Container variant={variant}>
      <Form>
        <ContainerButtoIcon
          onPress={onPress}
          hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
          {...rest}
        >
          <Icon name={icon} />
        </ContainerButtoIcon>
      </Form>
      <Value>{value}</Value>
      <Description> {description}</Description>
    </Container>
  );
}
