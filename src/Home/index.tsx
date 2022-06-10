import React from 'react';
import {
  InputNome,
  InputSenha,
  LabelSenha,
  LabelUser,
} from '../Components/style';
import {Button, Container, SubTitle, Title, TxtButton} from './style';

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Entre com as suas</Title>
      <Title style={{top: 150, color: '#513ccc'}}>credenciais de acesso</Title>

      <SubTitle>
        Bem-vindo! Por favor, insira seus dados para realizar o login no sistema
      </SubTitle>

      <LabelUser>Usuário</LabelUser>

      <InputNome placeholder="Informe seu usuário..." />

      <LabelSenha>Senha</LabelSenha>

      <InputSenha placeholder="Senha" secureTextEntry={true} />

      <Button activeOpacity={0.7}>
        <TxtButton>Entrar</TxtButton>
      </Button>
    </Container>
  );
};
