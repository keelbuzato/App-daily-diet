import { TouchableOpacityProps } from 'react-native';
import { Container, Status, Title } from './style';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'UP' | 'DOWN';
  isActive: boolean;
}

export const ButtonSelect = ({ title, type, isActive, ...rest }: Props) => {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Status type={type} />
      <Title>{title}</Title>
    </Container>
  );
};
