import { Container, ContainerInput, Titulo } from './style';
import { TextInputProps } from 'react-native';
import React from 'react';

type PropText = TextInputProps;
type Props = TextInputProps & {
  name: string;
  ellipse?: PropText;
};

export function Input({ name, ...rest }: Props) {
  return (
    <Container>
      <Titulo ellipsizeMode="tail" numberOfLines={1}>
        {name}
      </Titulo>
      <ContainerInput {...rest} />
    </Container>
  );
}
