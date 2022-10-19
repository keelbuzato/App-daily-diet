import { PercentVariant } from '@utils/getPercentVariant';
import { TouchableOpacityProps } from 'react-native';
import { Conatiner, Header, Title, Icon, Button } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { getVariant } from '@utils/getVariant';

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
    <Conatiner>
      <Header variant={variant}>
        <Button {...rest} onPress={onPress}>
          <Icon name={icon} />
        </Button>
        <Title>{titulo}</Title>
      </Header>
    </Conatiner>
  );
}
