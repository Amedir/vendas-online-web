import {
  BackgroudImage,
  Container,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroudImage src="./background.jpg" alt="Hero Image" />

      <Container>
        <LimitedContainer>
          <LogoImage src="./logo.png" alt="Logo" />
        </LimitedContainer>
      </Container>
    </div>
  );
};

export default LoginScreen;
