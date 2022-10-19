import { Container, ContainerInput, Titulo } from './style';
import { TextInputProps } from 'react-native';
import React from 'react';

type Props = TextInputProps & {
  name: string;
};

export function Input({ name, ...rest }: Props) {
  return (
    <Container>
      <Titulo>{name}</Titulo>
      <ContainerInput {...rest} />
    </Container>
  );
}
