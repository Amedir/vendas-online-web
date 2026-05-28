import axios, { type AxiosResponse } from 'axios';
import { useState } from 'react';

import Button from '../../../shared/buttons/button/button';
import SVGLogo from '../../../shared/icons/SVGLogo';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroudImage,
  ContainerLogin,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

interface ReturnObject {
  accessToken: string;
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
  };
}

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObject: ReturnObject = await axios({
      method: 'POST',
      url: 'https://revolt-smartly-whoopee.ngrok-free.dev/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .catch((error) => {
        console.log(`error ${error}`);
      })
      .then((result: AxiosResponse<ReturnObject>) => {
        console.log(`result ${result.data.user.id}`);
        return result.data;
      });
    console.log(`returnObject ${returnObject}`);
  };

  return (
    <div>
      <BackgroudImage src="./background.jpg" alt="Hero Image" />

      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo width={200} height={200} />
          <TitleLogin level={2} type="danger">
            LOGIN
          </TitleLogin>
          <Input
            title="Usuário"
            placeholder="Digite seu usuário"
            margin="20px 0px"
            onChange={handleUsername}
            value={email}
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
