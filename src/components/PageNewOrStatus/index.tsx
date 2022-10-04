import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import { TouchableOpacityProps } from 'react-native';
import {
  Conatiner,
  Header,
  Title,
  Body,
  ContainerBox,
  Form,
  Question,
} from './style';
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input } from '@components/Input';
import { ButtonSelect } from '@components/ButtonSelect';
import { Button } from '@components/Button';
import { useState } from 'react';

type Props = TouchableOpacityProps & {
  titulo: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant: PercentVariant;
};
export function PageNewOrStatus({ titulo, icon, variant }: Props) {
  const [transactionType, setTransactionType] = useState();

  const Stack = createNativeStackNavigator();

  const handleTransactionTypeSelect = (type: 'UP' | 'DOWN') => {
    setTransactionType(type);
  };

  return (
    <Conatiner>
      <Header variant={variant}>
        <Title>{titulo}</Title>
      </Header>
      <Body>
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
        <Button title="Cadastrar refeição" />
      </Body>
    </Conatiner>
  );
}
