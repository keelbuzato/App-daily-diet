import { Button } from '@components/Button';
import { ButtonSelect } from '@components/ButtonSelect';
import { HeaderNewlsMeals } from '@components/HeaderNewlsMeals';
import { Input } from '@components/Input';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createdNewMeals } from '@storage/GroupNewMeals/createdNewMeals';
import { getByIdMeals } from '@storage/GroupNewMeals/getByIdMeals';
import { removeRegisterMeals } from '@storage/GroupNewMeals/removeRegisterMeals';
import { PercentVariant } from '@utils/getPercentVariant';
import { createdDate } from '@utils/time';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ContainerSafeAreaView,
  ContainerBody,
  ContainerInfoDateAndHours,
  ContainerDate,
  ContainerTime,
  Title,
  SelectDateAndTime,
  ButtonDateAndHours,
  Form,
  Question,
} from './style';

export const EditRegister = () => {
  const [isVisibleDate, setIsVisibleDate] = useState(false);
  const [isVisibleTime, setIsVisibleTime] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const [nameMeal, setNameMeal] = useState('');
  const [descriptionMeals, setDescriptionMeals] = useState('');
  const [date, setDate] = useState();
  const [hours, setHours] = useState();
  const [idMeal, setIdMeal] = useState();
  const [showDate, setShowDate] = useState();
  const [showTime, setShowTime] = useState();

  const {
    params: { id },
  } = useRoute();

  const navigation = useNavigation();

  const getMeal = useCallback(async () => {
    const meal = await getByIdMeals(id);
    if (meal?.date) {
      const date = createdDate(meal.date, meal.hours);
      const hours = createdDate(meal.date, meal.hours);
      setDate(date);
      setHours(hours);
    }
    setNameMeal(meal.name);
    setDescriptionMeals(meal.description);
    setTransactionType(meal.variant);
    setIdMeal(meal.id);
  }, [id]);

  async function updatingInformation() {
    try {
      await removeRegisterMeals(id);
      const updatingMeal = {
        id: idMeal,
        name: nameMeal,
        description: descriptionMeals,
        date: date.toLocaleDateString(),
        hours: transfomingTime(hours),
        variant: transactionType,
      };

      await createdNewMeals(updatingMeal);
      navigation.navigate('detailsMeals', { id });
    } catch (error) {
      console.log(error);
    }
  }

  const handleTransactionTypeSelect = (type: 'UP' | 'DOWN') => {
    setTransactionType(type);
  };

  const showDatePickerTimer = () => {
    setIsVisibleTime(true);
  };

  const showDatePickerDate = () => {
    setIsVisibleDate(true);
  };

  const hideDatePickerTimer = () => {
    setIsVisibleTime(false);
  };

  const hideDatePickerDate = () => {
    setIsVisibleDate(false);
  };

  const handleConfirmDate = (date) => {
    console.warn('A date has been picked: ', date);
    setDate(date);
    hideDatePickerDate();
    setShowDate(true);
  };

  const handleConfirmTime = (hours) => {
    console.warn('A hours has been picked: ', hours);
    setHours(hours);
    hideDatePickerTimer();
  };
  const transfomingTime = (hour) => {
    if (!hour) return '';
    const transfomedTime = hour?.toLocaleTimeString()?.split(':');
    return `${transfomedTime[0]}:${transfomedTime[1]}`;
  };

  function backDetailMeals() {
    navigation.navigate('detailsMeals', { id });
  }

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <ContainerSafeAreaView>
      <HeaderNewlsMeals
        onPress={backDetailMeals}
        titulo={'Editar refeição'}
        variant={PercentVariant.tertiary}
        icon={'arrow-back'}
      />
      <ContainerBody>
        <Input name={'Name'} value={nameMeal} onChangeText={setNameMeal} />
        <Input
          name={'Descrição'}
          multiline={true}
          autoCapitalize="sentences"
          blurOnSubmit={true}
          style={{ height: 120 }}
          value={descriptionMeals}
          onChangeText={setDescriptionMeals}
        />
        <ContainerInfoDateAndHours>
          <ContainerDate>
            <Title>Data</Title>
            <ButtonDateAndHours onPress={showDatePickerDate}>
              <Title>{date?.toLocaleDateString()}</Title>
            </ButtonDateAndHours>
            <SelectDateAndTime
              testID="datePicker"
              isVisible={isVisibleDate}
              mode={'date'}
              display={'spinner'}
              locale="pt-BR"
              textColor="black"
              date={date}
              onConfirm={() => handleConfirmDate(date)}
              onCancel={hideDatePickerDate}
              onChange={setDate}
            />
          </ContainerDate>
          <ContainerTime>
            <Title>Hora</Title>
            <ButtonDateAndHours onPress={showDatePickerTimer}>
              <Title>{transfomingTime(hours)}</Title>
            </ButtonDateAndHours>
            <SelectDateAndTime
              testID="timeDatePicker"
              isVisible={isVisibleTime}
              mode={'time'}
              display={'spinner'}
              locale="pt-BR"
              textColor="black"
              date={hours}
              onConfirm={handleConfirmTime}
              onCancel={hideDatePickerTimer}
              onChange={setHours}
            />
          </ContainerTime>
        </ContainerInfoDateAndHours>
        <Question>Está dentro da dieta?</Question>
        <Form>
          <ButtonSelect
            title="Sim"
            type={PercentVariant.primary}
            onPress={() => handleTransactionTypeSelect('UP')}
            isActive={transactionType === 'UP'}
          />
          <ButtonSelect
            title="Não"
            type={PercentVariant.secundary}
            onPress={() => handleTransactionTypeSelect('DOWN')}
            isActive={transactionType === 'DOWN'}
          />
        </Form>
        <Button
          title="Salvar alterações"
          type="CONTAINED"
          onPress={() => updatingInformation()}
        />
      </ContainerBody>
    </ContainerSafeAreaView>
  );
};
