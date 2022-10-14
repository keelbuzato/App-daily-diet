import { Input } from '@components/Input';
import { HeaderNewlsMeals } from '@components/HeaderNewlsMeals';
import { PercentVariant } from '@utils/getPercentVariant';
import { Container, ContainerBox, Form, Question, Teste } from './styled';
import { Button } from '@components/Button';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonSelect } from '@components/ButtonSelect';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createdNewMeals } from '@storage/GroupNewMeals/createdNewMeals';
import uuid from 'react-native-uuid';
export function RegisterNewMeals() {
  const [transactionType, setTransactionType] = useState('');
  const [nameMeal, setNameMeal] = useState('');
  const [descriptionMeals, setDescriptionMeals] = useState('');
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');

  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  const handleTransactionTypeSelect = (type: 'UP' | 'DOWN') => {
    setTransactionType(type);
  };

  function backHome() {
    navigation.navigate('home');
  }
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
        date: date,
        hours: hours,
        variant: transactionType,
      };

      await createdNewMeals(registerMeals);

      navigation.navigate('feedback');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Teste>
      <HeaderNewlsMeals
        variant={PercentVariant.primary}
        titulo="Nova refeição"
        icon="arrow-back"
        onPress={() => backHome()}
      />
      <Container>
        <Input name="Name" onChangeText={setNameMeal} />
        <Input
          name="Description"
          style={{ height: 120 }}
          multiline
          value={descriptionMeals}
          onChangeText={setDescriptionMeals}
        />
        <ContainerBox>
          <Input
            name="Data"
            style={{ width: '95%' }}
            dataDetectorTypes={'calendarEvent'}
            value={date}
            onChangeText={setDate}
          />
          <Input
            name="Hora"
            style={{ width: '100%' }}
            value={hours}
            onChangeText={setHours}
          />
        </ContainerBox>
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
    </Teste>
  );
}
