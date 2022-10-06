import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import { TouchableOpacityProps } from 'react-native';
import { Conatiner, Header, Title, Icon, Button } from './style';
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  titulo: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant: PercentVariant;
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
