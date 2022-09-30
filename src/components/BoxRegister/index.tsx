import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Description,
  Divider,
  Hours,
  Status,
  ContainerInformation,
} from './style';

type BoxInformationProps = TouchableOpacityProps & {
  value: string;
  description: string;
};

export function BoxRegister({
  value,
  description,
  ...rest
}: BoxInformationProps) {
  return (
    <Container {...rest}>
      <ContainerInformation>
        <Hours>{value}</Hours>
        <Divider />
        <Description>{description}</Description>
      </ContainerInformation>
      <Status />
    </Container>
  );
}
