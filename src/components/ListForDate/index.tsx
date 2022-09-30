import { BoxRegister } from '@components/BoxRegister';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { DateList, Container } from './style';

export function ListForDate() {
  const [meals, setMeals] = useState([
    { id: '1', hours: '20:00', text: 'X-Tudo' },
    { id: '2', hours: '19:30', text: 'Hora de deitar' },
  ]);

  return (
    <Container>
      <DateList>12.08.22</DateList>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BoxRegister value={item.hours} description={item.text} />
        )}
      />
    </Container>
  );
}
