import styled, { css } from 'styled-components/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const Container = styled.View`
flex:4;
top:-20px
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  padding: 24px 24px 0px 24px;
  border-radius: 20px;
`;
export const ContainerBoxFather = styled.View`
  flex-direction: row;
`;

export const ContainerInfoDateAndHours = styled.View`
  width: 48%;
  margin-right: 15px;
  flex-direction: column;
`;
export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 148px;
`;

export const Question = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
export const ButtonDateAndHours = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  border-radius:6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  padding-left: 14px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const InputDatePicker = styled(DateTimePickerModal)`
  width: 100%;
  height: 300px;
  right: 15px;
  min-height: 30px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-bottom:4px;
`;
