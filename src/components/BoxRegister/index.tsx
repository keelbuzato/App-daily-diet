import { PercentVariant } from '@utils/getPercentVariant';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Description,
  Divider,
  Hours,
  Status,
  ContainerInformation,
} from './style';

type BoxInformationProps = TouchableOpacityProps & {
  value: string;
  description: string;
  variant: PercentVariant;
};

export function BoxRegister({
  value,
  description,
  variant,
  ...rest
}: BoxInformationProps) {
  return (
    <Container {...rest}>
      <ContainerInformation>
        <Hours>{value}</Hours>
        <Divider />
        <Description ellipsizeMode="tail" numberOfLines={1}>
          {description}
        </Description>
      </ContainerInformation>
      <Status variant={variant} />
    </Container>
  );
}
