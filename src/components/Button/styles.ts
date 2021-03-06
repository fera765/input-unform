import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  background: #639cc6;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font: bold 18px/18px 'Roboto';
`;
