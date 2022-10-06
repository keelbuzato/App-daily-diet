import { BoxCenter, Container, Image, Title, Message, Form } from './style';
import feedbackGood from '../../assets/feedbackGood.png';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
export const Feedback = () => {
  const navigation = useNavigation();

  function backHome() {
    navigation.navigate('home');
  }
  return (
    <Container>
      <BoxCenter>
        <Form>
          <Title>Continue assim!</Title>
          <Message>Você continua dentro da dieta. Muito bem!</Message>
        </Form>
        <Image source={feedbackGood} />
        <Button
          onPress={() => backHome()}
          title="Ir para a página inicial"
          style={{ width: 191 }}
        />
      </BoxCenter>
    </Container>
  );
};
