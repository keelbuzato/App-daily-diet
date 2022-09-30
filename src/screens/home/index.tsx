import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { BoxRegister } from '@components/BoxRegister';
import { Percent } from '@components/Percent';
import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import {
  Container,
  ContainerInfoMeals,
  ContainerNewMeals,
  Titulo,
  DayList,
  DateList,
} from './style';
import { ListForDate } from '@components/ListForDate';
export function Home() {
  return (
    <Container>
      <Header />
      <Percent value="99,32%" variant={PercentVariant.primary} />
      <ContainerInfoMeals>
        <ContainerNewMeals>
          <Titulo>Refeições</Titulo>
          <Button title="Nova Refeição" nameIcon="add" />
        </ContainerNewMeals>
        <DayList>
          <ListForDate />
        </DayList>
      </ContainerInfoMeals>
    </Container>
  );
}
