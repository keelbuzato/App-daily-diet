import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import {
  Container,
  ContainerInfoMeals,
  ContainerNewMeals,
  Titulo,
  DayList,
} from './style';
import { ListForDate } from '@components/ListForDate';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  function handlePercent() {
    navigation.navigate('statistic');
  }

  const registerNewMeal = () => {
    navigation.navigate('newMeals');
  };

  return (
    <Container>
      <Header />
      <Percent
        value="99,32%"
        description="das refeições dentro da dieta"
        variant={PercentVariant.primary}
        icon={'arrow-upward'}
        onPress={handlePercent}
      />
      <ContainerInfoMeals>
        <ContainerNewMeals>
          <Titulo>Refeições</Titulo>
          <Button
            title="Nova Refeição"
            nameIcon="add"
            onPress={registerNewMeal}
          />
        </ContainerNewMeals>
        <DayList>
          <ListForDate />
          <ListForDate />
          <ListForDate />
          <ListForDate />
        </DayList>
      </ContainerInfoMeals>
    </Container>
  );
}
