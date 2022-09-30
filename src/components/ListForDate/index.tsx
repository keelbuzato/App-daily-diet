import { BoxRegister } from '@components/BoxRegister';
import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { DateList, Container } from './style';

export function ListForDate() {
  const [meals, setMeals] = useState('');

  return (
    <Container>
      <DateList>12.08.22</DateList>
      <BoxRegister
        value={'20:00'}
        description={'X-Tudo'}
        variant={PercentVariant.secundary}
      />
      <BoxRegister
        value={'20:00'}
        description={'X-Tudo'}
        variant={PercentVariant.primary}
      />
      <BoxRegister
        value={'20:00'}
        description={'X-Tudo'}
        variant={PercentVariant.primary}
      />
      <BoxRegister
        value={'20:00'}
        description={'X-Tudo'}
        variant={PercentVariant.secundary}
      />
    </Container>
  );
}
