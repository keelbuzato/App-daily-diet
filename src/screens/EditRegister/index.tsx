import { Button } from '@components/Button';
import { ButtonSelect } from '@components/ButtonSelect';
import { HeaderNewlsMeals } from '@components/HeaderNewlsMeals';
import { Input } from '@components/Input';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getByIdMeals } from '@storage/GroupNewMeals/getByIdMeals';
import { PercentVariant } from '@utils/getPercentVariant';
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
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const {
    params: { id },
  } = useRoute();

  const navigation = useNavigation();

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
  const showDateConfirm = (item) => {
    if (showDate === true) return item.toLocaleDateString();
    else {
      return '';
    }
  };

  const handleConfirmDate = (date) => {
    console.warn('A date has been picked: ', date);
    setDate(date);
    hideDatePickerDate();
    date.toLocaleDateString();
  };
  const showTimeConfirm = (item) => {
    if (showTime === true) return transfomingTime();
    else {
      return '';
    }
  };
  const handleConfirmTime = (hours) => {
    console.warn('A hours has been picked: ', hours);
    setHours(hours);
    hideDatePickerTimer();
    setShowTime(true);
  };
  const transfomingTime = () => {
    const transfomedTime = hours.toLocaleTimeString().split(':');
    return `${transfomedTime[0]}:${transfomedTime[1]}`;
  };

  function backDetailMeals() {
    navigation.navigate('detailsMeals', { id });
  }

  const getMeal = useCallback(async () => {
    const meal = await getByIdMeals(id);
    setNameMeal(meal.name);
    setDescriptionMeals(meal.description);
    setDate(meal.date);
    setHours(meal.hours);
  }, [id]);
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
              <Title>Teste</Title>
            </ButtonDateAndHours>
            <SelectDateAndTime
              testID="datePicker"
              isVisible={isVisibleDate}
              date={new Date()}
              mode={'date'}
              display={'spinner'}
              locale="pt-BR"
              textColor="black"
              onConfirm={handleConfirmDate}
              onCancel={hideDatePickerDate}
            />
          </ContainerDate>
          <ContainerTime>
            <Title>Hora</Title>
            <ButtonDateAndHours>
              <Title>teste</Title>
            </ButtonDateAndHours>
            <SelectDateAndTime
              testID="timeDatePicker"
              isVisible={isVisibleTime}
              mode={'time'}
              display={'spinner'}
              locale="pt-BR"
              textColor="black"
              onConfirm={() => {}}
              onCancel={() => {}}
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
          onPress={backDetailMeals}
        />
      </ContainerBody>
    </ContainerSafeAreaView>
  );
};
