import React from 'react';
import {
  Container,
  Content,
  Empty,
  InputContainer,
  ButtonLogin,
} from './styles';

export const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="form-container">
          <h1>Acesso</h1>
          <form>
            <InputContainer>
              <input type="email" placeholder="Email Zydus" />
            </InputContainer>
            <ButtonLogin type="submit">Entrar</ButtonLogin>
          </form>
        </div>
      </Content>
      <Empty />
    </Container>
  );
};
