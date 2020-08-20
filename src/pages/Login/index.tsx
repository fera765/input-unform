import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  function handleSignIn(e: Object) {
    console.log(e);
  }

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="off"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />
          <Input
            ref={passwordInputRef}
            name="password"
            autoCompleteType="off"
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />

          <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
