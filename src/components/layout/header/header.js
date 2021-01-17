import React from 'react';
import { Row, Col, Container } from 'thegridsys';
import {
  HeadWrapper,
  UserName,
  Menu,
  Notification,
  YallaHomeLogoWrapper,
  YallaLogoWrapper,
} from './styles/headerStyle';
import { Responsive } from '../../../helper';
import YallaLogo from '../../images/YClogo';
import YallaHomeLogo from '../../images/YChomeLogo';
import NotificationIcon from '../../icons/notifications';
import MenuIcon from '../../icons/menu';
import T from '../../T';
import { useAuth } from '../../../hooks';
import LangSwitcher from './langSwitcher';

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
            <YallaHomeLogoWrapper user={useAuth.isAuthenticated}>
              <YallaHomeLogo />
            </YallaHomeLogoWrapper>
          </Col>
          {useAuth.isAuthenticated && (
            <Col xs="3" md="4" alignSelf="center" order="2">
              <Menu>
                <T id="MENU_TITLE" />
                <MenuIcon />
              </Menu>
            </Col>
          )}

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
                      {useAuth.isAuthenticated ? (
                        <>
                          <Col xs="1" md="3">
                            <LangSwitcher />
                          </Col>
                          <Col xs="1" md="3">
                            <Notification>
                              <NotificationIcon />
                            </Notification>
                          </Col>
                          <Col xs="1" md="3">
                            <UserName>D</UserName>
                          </Col>
                        </>
                      ) : (
                        <>
                          <Col xs="1" md="12">
                            <LangSwitcher />
                          </Col>
                        </>
                      )}
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
