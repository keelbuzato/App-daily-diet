import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Description, Value, Form } from './style';
import { PercentVariant } from './utils/getPercentVariant';

type props = {
  value: string;
  variant: PercentVariant;
};

export function Percent({ value, variant }: props) {
  return (
    <Container variant={variant}>
      <Form>
        <ButtonIcon icon="arrow-upward" type="PRIMARY" />
      </Form>
      <Value>{value}</Value>
      <Description> das refeições dentro da dieta</Description>
    </Container>
  );
}
