import { Container, Title, IconForButton } from './style';
import { useTheme } from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  nameIcon: string;
  onPress: () => void;
};

export function Button({ title, nameIcon, onPress, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container {...rest} onPress={onPress}>
      <IconForButton name={nameIcon} />
      <Title>{title}</Title>
    </Container>
  );
}
