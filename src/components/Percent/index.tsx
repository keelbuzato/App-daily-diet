import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Description, Value, Form } from './style';
import { PercentVariant } from './utils/getPercentVariant';

type props = {
  value: string;
  description: string;
  variant: PercentVariant;
};

export function Percent({ value, variant, description }: props) {
  return (
    <Container variant={variant}>
      <Form>
        <ButtonIcon icon="arrow-upward" type="PRIMARY" />
      </Form>
      <Value>{value}</Value>
      <Description> {description}</Description>
    </Container>
  );
}
