import Button from '../../../shared/inputs/input/buttons/button/button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroudImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroudImage src="./background.jpg" alt="Hero Image" />

      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" alt="Logo" />
          <TitleLogin level={2} type="danger">
            LOGIN
          </TitleLogin>
          <Input title="Usuário" placeholder="Digite seu usuário" />
          <Input title="Senha" placeholder="Digite sua senha" />
          <Button title="Entrar" type="primary" margin="20px 0px">
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
