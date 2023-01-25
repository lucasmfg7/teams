

import logoImg from '@assets/logo.png'

import { Container, Logo } from './styles'

export const Header = () => {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
};
