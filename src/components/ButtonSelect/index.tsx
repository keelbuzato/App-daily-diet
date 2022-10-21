import { PercentVariant } from '@utils/getPercentVariant';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Status, Title } from './style';

export interface PropsButtonSelect extends TouchableOpacityProps {
  title: string;
  type: PercentVariant;
  isActive: boolean;
}

export const ButtonSelect = ({
  title,
  type,
  isActive,
  ...rest
}: PropsButtonSelect) => {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Status type={type} />
      <Title>{title}</Title>
    </Container>
  );
};
