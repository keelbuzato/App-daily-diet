import { ButtonIcon } from '@components/ButtonIcon';
import {
  Container,
  Description,
  Value,
  Form,
  ContainerButtoIcon,
  Icon,
} from './style';
import { PercentVariant } from './utils/getPercentVariant';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

type IconProps = keyof typeof MaterialIcons.glyphMap;

type props = TouchableOpacityProps & {
  value: string;
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
        <ContainerButtoIcon onPress={onPress} {...rest}>
          <Icon name={icon} />
        </ContainerButtoIcon>
      </Form>
      <Value>{value}</Value>
      <Description> {description}</Description>
    </Container>
  );
}
