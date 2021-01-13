import React from 'react';
import { Row, Col, Container } from 'thegridsys';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
import YallaLogo from '../../images/YClogo';
import NotificationIcon from '../../icons/notifications';
import MenuIcon from '../../icons/menu';
import T from '../../T';

function Header() {
  return (
    <Container>
      <Row
        alignContent="flex-start"
        alignItems="center"
        justifyContent="space-between"
      />
      <Col xs="10" md="6" alignSelf="center" order="1">
        <YallaLogo />
      </Col>
      <Col xs="2" md="3" alignSelf="center" order="2">
        <T id="MENU_TITLE" />
        <MenuIcon />
      </Col>
      <Col xs="1" md="3" alignSelf="center" order="3">
        <T id="LANG" />
        <NotificationIcon />
      </Col>
    </Container>
  );
}

export default Header;
