import { Container, ImgPerfil, Logo } from './style';
import logo from '@assets/Logo.png';
import perfil from '@assets/perfil.png';
import React from 'react';
export function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <ImgPerfil source={perfil} />
    </Container>
  );
}
