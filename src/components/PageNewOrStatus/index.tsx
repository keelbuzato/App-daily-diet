import { PercentVariant } from '@components/Percent/utils/getPercentVariant';
import { TouchableOpacityProps } from 'react-native';
import { Conatiner, Header, Titulo, Body, ContainerBox } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input } from '@components/Input';
import { Box } from '@components/Box';

type Props = TouchableOpacityProps & {
  titulo: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant: PercentVariant;
};
export function PageNewOrStatus({ titulo, icon, variant }: Props) {
  const Stack = createNativeStackNavigator();

  return (
    <Conatiner>
      <Header variant={variant}>
        <Titulo>{titulo}</Titulo>
      </Header>
      <Body>
        <Input name="Name" />
        <Input name="Description" style={{ height: 120 }} />
        <ContainerBox>
          <Input name="Data" style={{ width: '95%' }} />
          <Input name="Hora" style={{ width: '100%' }} />
        </ContainerBox>
      </Body>
    </Conatiner>
  );
}
