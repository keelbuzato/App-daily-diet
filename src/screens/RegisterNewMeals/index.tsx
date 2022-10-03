import { Input } from '@components/Input';
import { PageNewOrStatus } from '@components/PageNewOrStatus';
import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import { Container } from './styled';

export function RegisterNewMeals() {
  return (
    <Container>
      <PageNewOrStatus
        variant={PercentVariant.primary}
        titulo="Nova refeição"
      ></PageNewOrStatus>
    </Container>
  );
}
