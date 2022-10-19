import { Button } from '@components/Button';
import { HeaderNewlsMeals } from '@components/HeaderNewlsMeals';
import { PercentVariant } from '@utils/getPercentVariant';
import {
  Container,
  ContainerBody,
  Titulo,
  Descripition,
  ContainerFooter,
  DescriptionDateAndHours,
  DescriptionStatus,
  Status,
  ContainerStatus,
} from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { removeRegisterMeals } from '@storage/GroupNewMeals/removeRegisterMeals';
import { getAllNewMeals } from '@storage/GroupNewMeals/getAllNewMeals';
import { Alert } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { getByIdMeals } from '@storage/GroupNewMeals/getByIdMeals';
import { useCallback } from 'react';
import { Loading } from '@components/Loading';

import { getVariant } from '@utils/getVariant';
import React from 'react';

export const DetailsMeal = () => {
  const [detailsMeal, setDetailsMeal] = useState();
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute();

  async function handleRemoveMeals(idMeals: string) {
    try {
      await removeRegisterMeals(idMeals);
      getAllNewMeals();
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Remover Refeição',
        'Não foi possivel remover essa refeição.',
      );
    }
  }

  const confirmationRemoveMeals = () => {
    Alert.alert('Remover', 'Deseja remover essa refeição?', [
      { text: 'Não', style: 'cancel' },
      {
        text: 'Sim',
        onPress: async () => {
          await handleRemoveMeals(id);
          backHome();
        },
      },
    ]);
  };

  function backHome() {
    navigation.navigate('home');
  }
  function editRegisterMeal() {
    navigation.navigate('editRegister', { id });
  }

  const getMeal = useCallback(async () => {
    const meal = await getByIdMeals(id);
    setDetailsMeal(meal);
  }, [id]);

  useEffect(() => {
    getMeal();
  }, [id]);

  const msgStatus = (variant) => {
    if (variant === 'UP') {
      return 'Dentro da dieta ';
    }
    return 'Fora da dieta';
  };

  if (!detailsMeal?.name) return <Loading />;
  return (
    <>
      <Container>
        <HeaderNewlsMeals
          titulo="Refeição"
          variant={getVariant(detailsMeal.variant)}
          onPress={backHome}
          icon={'arrow-back'}
        />
        <ContainerBody>
          <Titulo>{detailsMeal.name} </Titulo>
          <Descripition>{detailsMeal.description}</Descripition>
          <DescriptionDateAndHours>Data e Hora</DescriptionDateAndHours>
          <Descripition>
            {detailsMeal.date} ás {detailsMeal.hours}
          </Descripition>
          <ContainerStatus>
            <Status variant={getVariant(detailsMeal.variant)} />
            <DescriptionStatus>
              {msgStatus(detailsMeal.variant)}
            </DescriptionStatus>
          </ContainerStatus>
          <ContainerFooter>
            <Button
              title="Editar refeição"
              onPress={() => editRegisterMeal(id)}
              nameIcon="edit"
              type="CONTAINED"
            />
            <Button
              title="Excluir refeição"
              onPress={() => confirmationRemoveMeals(id)}
              nameIcon="delete"
              type="OUTLINED"
            />
          </ContainerFooter>
        </ContainerBody>
      </Container>
    </>
  );
};
