import React from 'react';
import { Row, Col, Container } from 'thegridsys';
import styled from 'styled-components/macro';
import { SECONDARY_COLOR, DEFAULT_COLOR } from '../../../constants';
import { Responsive } from '../../../helper';
import YallaLogo from '../../images/YClogo';
import NotificationIcon from '../../icons/notifications';
import MenuIcon from '../../icons/menu';
import T from '../../T';

const HeadWrapper = styled.div`
  margin: 20px 0;
`;
const UserName = styled.div`
  display: inline-block;
  border-radius: 100%;
  width: 36px;
  height: 36px;
  color: ${DEFAULT_COLOR};
  background: ${SECONDARY_COLOR};
  text-align: center;
  line-height: 36px;
`;
const Menu = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

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
                        <T id="LANG" />
                      </Col>
                      <Col xs="1" md="3">
                        <NotificationIcon />
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
