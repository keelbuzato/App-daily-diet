import { Container, Title, IconForButton } from './style';
import { useTheme } from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  nameIcon: string;
};

export function Button({ title, nameIcon, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <IconForButton name={nameIcon} />
      <Title>{title}</Title>
    </Container>
  );
}
