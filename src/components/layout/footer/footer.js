/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Row, Col, Container } from 'thegridsys';
import {
  FooterLinks,
  FooterRights,
  FooterLinksWrapper,
} from './styles/footerStyle';
import T from '../../T';
import footerLinks from '../../../fixtures/footerLinks.json';
import { useAuth } from '../../../hooks';

function Footer() {
  return (
    <Container>
      <FooterLinksWrapper>
        {footerLinks.map((item) => (
          <FooterLinks key={item.id} user={useAuth.isAuthenticated}>
            <a href={item.url} target="_blank">
              <T id={item.name} />
            </a>
          </FooterLinks>
        ))}
      </FooterLinksWrapper>
      <Row>
        <Col xs="12" md="12">
          <FooterRights>
            <T id="FOOTER_COPY_RIGHT" />
          </FooterRights>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
