import { useState } from 'react';

import Button from '../../../shared/buttons/button/button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroudImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log(`${username} ${password}`);
  };

  return (
    <div>
      <BackgroudImage src="./background.jpg" alt="Hero Image" />

      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" alt="Logo" />
          <TitleLogin level={2} type="danger">
            LOGIN
          </TitleLogin>
          <Input
            title="Usuário"
            placeholder="Digite seu usuário"
            margin="20px 0px"
            onChange={handleUsername}
            value={username}
          />
          <Input
            title="Senha"
            placeholder="Digite sua senha"
            onChange={handlePassword}
            value={password}
            type="password"
          />
          <Button title="Entrar" type="primary" margin="20px 0px 0px" onClick={handleLogin}>
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
