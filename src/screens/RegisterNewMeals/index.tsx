import { Input } from '@components/Input';
import { HeaderNewlsMeals } from '@components/HeaderNewlsMeals';
import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import { Container, ContainerBox, Form, Question, Teste } from './styled';
import { Button } from '@components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonSelect } from '@components/ButtonSelect';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export function RegisterNewMeals() {
  const [transactionType, setTransactionType] = useState();
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  const handleTransactionTypeSelect = (type: 'UP' | 'DOWN') => {
    setTransactionType(type);
  };

  function backHome() {
    navigation.navigate('home');
  }
  function handleRegisterNewMeals() {
    navigation.navigate('feedback');
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
        <Input name="Name" />
        <Input name="Description" style={{ height: 120 }} multiline />
        <ContainerBox>
          <Input
            name="Data"
            style={{ width: '95%' }}
            dataDetectorTypes={'calendarEvent'}
          />
          <Input name="Hora" style={{ width: '100%' }} />
        </ContainerBox>
        <Question>Está dentro da dieta?</Question>
        <Form>
          <ButtonSelect
            title="Sim"
            type={'UP'}
            onPress={() => handleTransactionTypeSelect('UP')}
            isActive={transactionType === 'UP'}
          />
          <ButtonSelect
            title="Não"
            type={'DOWN'}
            onPress={() => handleTransactionTypeSelect('DOWN')}
            isActive={transactionType === 'DOWN'}
          />
        </Form>
        <Button
          onPress={() => handleRegisterNewMeals()}
          title="Cadastrar refeição"
        />
      </Container>
    </Teste>
  );
}
