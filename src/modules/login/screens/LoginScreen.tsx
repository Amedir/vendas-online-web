import Input from '../../../shared/inputs/input/input';
import {
  BackgroudImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroudImage src="./background.jpg" alt="Hero Image" />

      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" alt="Logo" />
          <Input title="Usuário" placeholder="Digite seu usuário" />
          <Input title="Senha" placeholder="Digite sua senha" />
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
