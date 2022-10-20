import { Box } from '@components/Box';
import { ButtonIcon } from '@components/ButtonIcon';
import { Percent } from '@components/Percent';
import { PercentVariant } from '@utils/getPercentVariant';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import {
  Description,
  ContainerPercentStatistic,
  Value,
  ContainerGeneralStatistic,
  Container,
  Title,
  OrganizingBox,
  ContainerDuploBox,
  DataValue,
} from './styled';
import { getAllNewMeals } from '@storage/GroupNewMeals/getAllNewMeals';
import { createdDate } from '@utils/time';

export function Statistic() {
  const [listMeal, setListMeal] = useState([{}]);
  const [bestSequence, setBestSequence] = useState();
  const navigate = useNavigation();

  const getListMeal = async () => {
    const getMeal = await getAllNewMeals();
    const orderDate = getMeal.sort(
      (a, b) => createdDate(b.date, b.hours) - createdDate(a.date, a.hours),
    );
    setListMeal(orderDate);
  };
  const calculateBestSequence = useCallback(() => {
    let currentBest = 0;
    let best = 0;
    listMeal.forEach((item) => {
      if (item.variant == 'DOWN') {
        currentBest = 0;
        return;
      }
      currentBest = currentBest + 1;
      if (currentBest > best) {
        best = currentBest;
      }
    });
    console.log(currentBest);
    setBestSequence(best);
  }, [listMeal]);

  const calcMealCorrect = () => {
    const correctMeal = listMeal.filter((item) => item.variant === 'UP');
    return correctMeal.length;
  };
  const calcMealWrong = () => {
    const wronMeal = listMeal.filter((item) => item.variant === 'DOWN');
    return wronMeal.length;
  };
  const PercentageAllMeals = () => {
    const variants = listMeal.filter((item) => item.variant == 'UP');
    const correctMeals = variants.length;
    const allMeal = listMeal.length;
    const wrongMeals = allMeal - correctMeals;
    const calcPercent = (correctMeals / allMeal) * 100;
    const percent = calcPercent.toFixed(2).replace('.', ',');
    return `${percent}%`;
  };

  const hanldeBackHome = () => {
    navigate.navigate('home');
  };

  useFocusEffect(
    useCallback(() => {
      getListMeal();
    }, []),
  );
  useEffect(() => {
    calculateBestSequence();
  }, [listMeal]);

  return (
    <Container>
      <ContainerPercentStatistic variant={PercentVariant.primary}>
        <DataValue>
          <ButtonIcon
            icon="arrow-back"
            type="PRIMARY"
            onPress={hanldeBackHome}
          ></ButtonIcon>
          <Value>{PercentageAllMeals()}</Value>
          <Description>das refeiçoes dentro da dieta</Description>
        </DataValue>
      </ContainerPercentStatistic>
      <ContainerGeneralStatistic>
        <Title>Estatística gerais</Title>
        <OrganizingBox>
          <Percent
            value={bestSequence}
            description="melhor sequência de pratos dentro da dieta"
            variant={PercentVariant.tertiary}
          />
          <Percent
            value={listMeal.length}
            description="Refeições registradas"
            variant={PercentVariant.tertiary}
          />
          <ContainerDuploBox>
            <Box mr={2}>
              <Percent
                value={calcMealCorrect()}
                description="refeições dentro da dieta"
                variant={PercentVariant.primary}
              />
            </Box>
            <Box ml={2}>
              <Percent
                value={calcMealWrong()}
                description="refeições fora da dieta"
                variant={PercentVariant.secundary}
              />
            </Box>
          </ContainerDuploBox>
        </OrganizingBox>
      </ContainerGeneralStatistic>
    </Container>
  );
}
