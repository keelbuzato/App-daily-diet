import { BoxCenter, Container, Image, Title, Message, Form } from './style';
import feedbackGood from '../../assets/feedbackGood.png';
import feedbackBad from '../../assets/feedbackBad.png';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { getVariant } from '@utils/getVariant';

type VariantPropd = {};
export const Feedback = () => {
  const navigation = useNavigation();
  const {
    params: { variant },
  } = useRoute();

  function backHome() {
    navigation.navigate('home');
  }
  const onOrOffDiet = (variant: string) => {
    if (variant === 'UP') {
      return {
        title: 'Continue Assim!',
        description: 'Você continua dentro da dieta. Muito bem!',
        img: feedbackGood,
      };
    } else {
      return {
        title: 'Que Pena!',
        description:
          'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!',
        img: feedbackBad,
      };
    }
  };

  return (
    <Container>
      <BoxCenter>
        <Form>
          <Title variant={getVariant(variant)}>
            {onOrOffDiet(variant).title}
          </Title>
          <Message>{onOrOffDiet(variant).description}</Message>
        </Form>
        <Image source={onOrOffDiet(variant).img} />

        <Button
          onPress={() => backHome()}
          title="Ir para a página inicial"
          style={{ width: 191 }}
          type="CONTAINED"
        />
      </BoxCenter>
    </Container>
  );
};
