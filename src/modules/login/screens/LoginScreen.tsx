import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/inputs/input/input';
import { useGlobalContext } from '../../../shared/contexts/globalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroudImage,
  ContainerLogin,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const { accessToken, setAccessToken } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, postRequest } = useRequests();

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    postRequest('https://revolt-smartly-whoopee.ngrok-free.dev/auth', {
      email: email,
      password: password,
    });
  };

  return (
    <div>
      <BackgroudImage src="./background.jpg" alt="Hero Image" />

      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo width={200} height={200} />
          <TitleLogin level={2} type="secondary">
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
          <Button
            loading={loading}
            title="Entrar"
            type="primary"
            margin="20px 0px 0px"
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
