import { Box } from '@components/Box';
import { ButtonIcon } from '@components/ButtonIcon';
import { Percent } from '@components/Percent';
import { PercentVariant } from '@utils/getPercentVariant';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
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
    <>
      <ContainerPercentStatistic variant={PercentVariant.primary}>
        <DataValue>
          <ButtonIcon
            icon="arrow-back"
            type="PRIMARY"
            onPress={hanldeBackHome}
          ></ButtonIcon>
          <Value>{PercentageAllMeals()}</Value>
          <Description>das refei??oes dentro da dieta</Description>
        </DataValue>
      </ContainerPercentStatistic>
      <ContainerGeneralStatistic>
        <Title>Estat??stica gerais</Title>
        <OrganizingBox>
          <Percent
            value={bestSequence}
            description="melhor sequ??ncia de pratos dentro da dieta"
            variant={PercentVariant.tertiary}
          />
          <Percent
            value={listMeal.length}
            description="Refei????es registradas"
            variant={PercentVariant.tertiary}
          />
          <ContainerDuploBox>
            <Box marginRight={2}>
              <Percent
                value={calcMealCorrect()}
                description="refei????es dentro da dieta"
                variant={PercentVariant.primary}
              />
            </Box>
            <Box marginLeft={2}>
              <Percent
                value={calcMealWrong()}
                description="refei????es fora da dieta"
                variant={PercentVariant.secundary}
              />
            </Box>
          </ContainerDuploBox>
        </OrganizingBox>
      </ContainerGeneralStatistic>
    </>
  );
}
