import { Input } from '@components/Input';
import { HeaderNewlsMeals } from '@components/HeaderNewlsMeals';
import { PercentVariant } from '@utils/getPercentVariant';
import {
  Container,
  ContainerInfoDateAndHours,
  Form,
  Question,
  SafeAreaView,
  InputDatePicker,
  ContainerBoxFather,
  Title,
  ButtonDateAndHours,
} from './styled';
import { Button } from '@components/Button';
import { ButtonSelect } from '@components/ButtonSelect';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createdNewMeals } from '@storage/GroupNewMeals/createdNewMeals';
import uuid from 'react-native-uuid';
import React from 'react';

export function RegisterNewMeals() {
  const [transactionType, setTransactionType] = useState('');
  const [nameMeal, setNameMeal] = useState('');
  const [descriptionMeals, setDescriptionMeals] = useState('');
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(new Date());
  const [isDatePickerVisibleDate, setDatePickerVisibilityDate] =
    useState(false);
  const [isDatePickerVisibleTime, setDatePickerVisibilityTime] =
    useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const navigation = useNavigation();

  const showDatePickerTimer = () => {
    setDatePickerVisibilityTime(true);
  };
  const showDatePickerDate = () => {
    setDatePickerVisibilityDate(true);
  };

  const hideDatePickerTimer = () => {
    setDatePickerVisibilityTime(false);
  };

  const hideDatePickerDate = () => {
    setDatePickerVisibilityDate(false);
  };
  const showDateConfirm = (item) => {
    if (showDate === true) return item.toLocaleDateString();
    else {
      return '';
    }
  };
  const showTimeConfirm = () => {
    if (showTime === true) return transfomingTime();
    else {
      return '';
    }
  };

  const handleConfirmDate = (date) => {
    setDate(date);
    hideDatePickerDate();
    setShowDate(true);
  };
  const handleConfirmTime = (hours) => {
    setHours(hours);
    hideDatePickerTimer();
    setShowTime(true);
  };

  const handleTransactionTypeSelect = (type: 'UP' | 'DOWN') => {
    setTransactionType(type);
  };

  function backHome() {
    navigation.navigate('home');
  }

  const transfomingTime = () => {
    const transfomedTime = hours.toLocaleTimeString().split(':');
    return `${transfomedTime[0]}:${transfomedTime[1]}`;
  };

  async function handleRegisterNewMeals() {
    try {
      if (nameMeal === '') return;
      if (descriptionMeals === '') return;
      if (date === '') return;
      if (hours === '') return;

      const registerMeals = {
        id: uuid.v4(),
        name: nameMeal,
        description: descriptionMeals,
        date: date.toLocaleDateString(),
        hours: transfomingTime(),
        variant: transactionType,
      };

      await createdNewMeals(registerMeals);
      navigation.navigate('feedback', { variant: transactionType });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <HeaderNewlsMeals
        variant={PercentVariant.tertiary}
        titulo="Nova refeição"
        icon="arrow-back"
        onPress={() => backHome()}
      />
      <Container>
        <Input
          name="Name"
          onChangeText={setNameMeal}
          autoCapitalize="sentences"
        />
        <Input
          name="Description"
          style={{ height: 120 }}
          multiline
          value={descriptionMeals}
          onChangeText={setDescriptionMeals}
          autoCapitalize="sentences"
          blurOnSubmit={true}
        />
        <ContainerBoxFather>
          <ContainerInfoDateAndHours>
            <Title>Data</Title>
            <ButtonDateAndHours title="Data" onPress={showDatePickerDate}>
              <Title>{showDateConfirm(date)}</Title>
            </ButtonDateAndHours>
            <InputDatePicker
              testID="datePicker"
              isVisible={isDatePickerVisibleDate}
              date={new Date()}
              mode={'date'}
              display={'spinner'}
              locale="pt-BR"
              textColor="black"
              onConfirm={handleConfirmDate}
              onCancel={hideDatePickerDate}
            />
          </ContainerInfoDateAndHours>
          <ContainerInfoDateAndHours>
            <Title>Hora</Title>
            <ButtonDateAndHours title={hours} onPress={showDatePickerTimer}>
              <Title>{showTimeConfirm(hours)}</Title>
            </ButtonDateAndHours>
            <InputDatePicker
              testID="timeDatePicker"
              isVisible={isDatePickerVisibleTime}
              mode={'time'}
              display={'spinner'}
              locale="pt-BR"
              textColor="black"
              onConfirm={handleConfirmTime}
              onCancel={hideDatePickerTimer}
            />
          </ContainerInfoDateAndHours>
        </ContainerBoxFather>
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
          onPress={() => handleRegisterNewMeals()}
          title="Cadastrar refeição"
          type="CONTAINED"
        />
      </Container>
    </>
  );
}
