import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

const Header = () => (
  <Container>
    <Content>
      <Link to="/">
        <img src={logo} alt="instagram logo" />
      </Link>
      <Link to="/new">
        <img src={camera} alt="instagram camera" />
      </Link>
    </Content>
  </Container>
);

export default Header;
