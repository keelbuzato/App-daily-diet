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
import { createdDate } from '@utils/time';

export function Home() {
  const [mealSummary, setMealSummary] = useState([]);
  const [getMeal, setGetMeal] = useState([{}]);
  const navigation = useNavigation();

  async function fecthMeals() {
    try {
      const data = await getAllNewMeals();
      console.log(data);
      const dateString = data.sort(
        (a, b) => createdDate(b.date, b.hours) - createdDate(a.date, a.hours),
      );

      setGetMeal(dateString);
    } catch (error) {
      console.log(error);
    }
  }

  const PercentageOfMeals = () => {
    const variants = getMeal.filter((item) => item.variant == 'UP');
    const correctMeals = variants.length;
    const allMeal = getMeal.length;
    const calcPercent = (correctMeals / allMeal) * 100;
    const percent = calcPercent.toFixed(2).replace('.', ',');
    return `${percent}%`;
  };

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
    addDate(getMeal);
  }, [getMeal]);

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
          value={PercentageOfMeals()}
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
