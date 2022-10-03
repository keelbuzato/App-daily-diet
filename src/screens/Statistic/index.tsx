import { Box } from '@components/Box';
import { ButtonIcon } from '@components/ButtonIcon';
import { Percent } from '@components/Percent';
import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import { useNavigation } from '@react-navigation/native';
import {
  Description,
  ContainerPercentStatistic,
  Value,
  ContainerGeneralStatistic,
  Container,
  Title,
  OrganizingBox,
  ContainerDuploBox,
  DataValue,
} from './styled';

export function Statistic() {
  const navigate = useNavigation();

  const hanldeBackHome = () => {
    navigate.navigate('home');
  };

  return (
    <Container>
      <ContainerPercentStatistic variant={PercentVariant.secundary}>
        <DataValue>
          <ButtonIcon
            icon="arrow-back"
            type="SECONDARY"
            onPress={hanldeBackHome}
          ></ButtonIcon>
          <Value>30,21%</Value>
          <Description>das refeiçoes dentro da dieta</Description>
        </DataValue>
      </ContainerPercentStatistic>
      <ContainerGeneralStatistic>
        <Title>Estatística gerais</Title>
        <OrganizingBox>
          <Percent
            value="4"
            description="melhor sequência de pratos dentro da dieta"
            variant={PercentVariant.tertiary}
          />
          <Percent
            value="109"
            description="Refeições registradas"
            variant={PercentVariant.tertiary}
          />
          <ContainerDuploBox>
            <Box mr={2}>
              <Percent
                value="32"
                description="refeições dentro da dieta"
                variant={PercentVariant.primary}
              />
            </Box>
            <Box ml={2}>
              <Percent
                value="77"
                description="refeições fora da dieta"
                variant={PercentVariant.secundary}
              />
            </Box>
          </ContainerDuploBox>
        </OrganizingBox>
      </ContainerGeneralStatistic>
    </Container>
  );
}
