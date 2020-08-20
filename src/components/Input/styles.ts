import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #E4EAEF;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #263040;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #639cc6;
      border-color: #639cc6;
    `}
  ${props =>
    props.isFilled &&
    css`
      border-color: #639cc6;
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #9c9aa5;
  font: normal 16px/16px 'Roboto';
`;
