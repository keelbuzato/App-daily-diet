import { BoxRegister } from '@components/BoxRegister';
import { PercentVariant } from '@utils/getPercentVariant';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { DateList, Container } from './style';

interface Props extends TouchableOpacityProps {
  NewMealRegister: [
    {
      name: string;
      date: string;
      hours: string;
    },
  ];
  onPress: () => void;
}

export function ListForDate({ NewMealRegister, onPress, ...rest }: Props) {
  return (
    <Container>
      {NewMealRegister.map((item) => (
        <>
          <DateList key={item.date}>{item.date}</DateList>
          {item.list.map((meal) => (
            <BoxRegister
              key={meal.id}
              onPress={() => onPress(meal?.id)}
              value={meal.hours}
              description={meal.name}
              variant={
                meal?.variant === 'UP'
                  ? PercentVariant.primary
                  : PercentVariant.secundary
              }
            />
          ))}
        </>
      ))}
    </Container>
  );
}
