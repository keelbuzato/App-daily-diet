import { BoxRegister } from '@components/BoxRegister';
import { PercentVariant } from '@utils/getPercentVariant';
import { TouchableOpacityProps } from 'react-native';
import { DateList, Container } from './style';

interface Props extends TouchableOpacityProps {
  NewMealRegister: [];
}

export function ListForDate({ NewMealRegister, onPress, ...rest }: Props) {
  return (
    <Container>
      {NewMealRegister.map((item) => (
        <>
          <DateList>{item.date}</DateList>
          {item.list.map((meal) => (
            <BoxRegister
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
