import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type TypeIconProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: TypeIconProps;
};

export const Container = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
