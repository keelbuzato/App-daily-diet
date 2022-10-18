import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { PercentVariant } from '@utils/getPercentVariant';
import {
  Container,
  ContainerInfoMeals,
  ContainerNewMeals,
  Titulo,
  DayList,
} from './style';
import { ListForDate } from '@components/ListForDate';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import { getAllNewMeals } from '@storage/GroupNewMeals/getAllNewMeals';
import { useState, useCallback, useEffect } from 'react';
import React from 'react';

export function Home() {
  const [mealSummary, setMealSummary] = useState([]);
  const [teste, setTeste] = useState([{}]);
  const navigation = useNavigation();

  async function fecthMeals() {
    try {
      const data = await getAllNewMeals();
      setTeste(data);
    } catch (error) {
      console.log(error);
    }
  }

  const addDate = useCallback(
    (list) => {
      const newDates = [];
      list.forEach((listItem) => {
        const hasDate = newDates.some((item) => item.date === listItem.date);
        if (!hasDate) {
          newDates.push({
            date: listItem.date,
            list: populateList(listItem.date, list),
          });
        }
      });

      setMealSummary(newDates);
    },
    [mealSummary],
  );

  const populateList = (date, list) => {
    return list.filter((item) => item.date === date);
  };

  function handlePercent() {
    navigation.navigate('statistic');
  }

  const registerNewMeal = () => {
    navigation.navigate('newMeals');
  };
  const handleDetailsMeal = (id: string) => {
    navigation.navigate('detailsMeals', { id });
  };

  useFocusEffect(
    useCallback(() => {
      fecthMeals();
      console.log('atualização');
    }, []),
  );

  useEffect(() => {
    addDate(teste);
  }, [teste]);

  return (
    <ScrollView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
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
              type="CONTAINED"
            />
          </ContainerNewMeals>

          <DayList>
            <ListForDate
              NewMealRegister={mealSummary}
              onPress={handleDetailsMeal}
            />
          </DayList>
        </ContainerInfoMeals>
      </Container>
    </ScrollView>
  );
}
