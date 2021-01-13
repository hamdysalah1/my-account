import React from 'react';
import { Row, Col, Container } from 'thegridsys';
import {
  HeadWrapper,
  UserName,
  Language,
  Menu,
  Notification,
} from './styles/headerStyle';
import { Responsive } from '../../../helper';
import YallaLogo from '../../images/YClogo';
import NotificationIcon from '../../icons/notifications';
import MenuIcon from '../../icons/menu';
import T from '../../T';

function Header() {
  return (
    <Container>
      <HeadWrapper>
        <Row
          alignContent="flex-start"
          alignItems="center"
          justifyContent="space-between"
        >
          <Col xs="9" md="6" alignSelf="center" order="1">
            <YallaLogo />
          </Col>
          <Col xs="3" md="4" alignSelf="center" order="2">
            <Menu>
              <T id="MENU_TITLE" />
              <MenuIcon />
            </Menu>
          </Col>
          <Responsive>
            {(r) => (
              <>
                {r.tablet || r.desktop ? (
                  <Col xs="1" md="2" alignSelf="center" order="3">
                    <Row
                      alignContent="flex-start"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Col xs="1" md="3">
                        <Language>
                          <T id="LANG" />
                        </Language>
                      </Col>
                      <Col xs="1" md="3">
                        <Notification>
                          <NotificationIcon />
                        </Notification>
                      </Col>
                      <Col xs="1" md="3">
                        <UserName>D</UserName>
                      </Col>
                    </Row>
                  </Col>
                ) : (
                  <div />
                )}
              </>
            )}
          </Responsive>
        </Row>
      </HeadWrapper>
    </Container>
  );
}

export default Header;
