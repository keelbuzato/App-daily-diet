import { PercentVariant } from '@utils/getPercentVariant';
import { TouchableOpacityProps } from 'react-native';
import { Conatiner, Header, Title, Icon, Button } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

type Props = TouchableOpacityProps & {
  titulo: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant?: PercentVariant;
  onPress: () => void;
};
export function HeaderNewlsMeals({
  titulo,
  icon,
  variant,
  onPress,
  ...rest
}: Props) {
  return (
    <>
      <Header variant={variant}>
        <Button
          {...rest}
          onPress={onPress}
          hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
        >
          <Icon name={icon} />
        </Button>
        <Title>{titulo}</Title>
      </Header>
    </>
  );
}
