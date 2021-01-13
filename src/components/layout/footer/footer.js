/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Row, Col, Container } from 'thegridsys';
import { FooterLinks, FooterRights } from './styles/footerStyle';
import T from '../../T';

function Footer() {
  return (
    <Container>
      <Row
        alignContent="flex-start"
        alignItems="center"
        justifyContent="space-between"
      >
        <Col xs="12" sm="2" md="4" lg="4" alignSelf="center" order="1">
          <FooterLinks>
            <a
              href="https://yallacompare.com/insurance/uae/en/terms-and-conditions"
              target="_blank"
            >
              <T id="FOOTER_LINKS_TERMS" />
            </a>
          </FooterLinks>
        </Col>
        <Col xs="6" sm="2" md="4" lg="4" alignSelf="center" order="2">
          <FooterLinks>
            <a
              href="https://yallacompare.com/insurance/uae/en/privacy-policy"
              target="_blank"
            >
              <T id="FOOTER_LINKS_PRIVACY" />
            </a>
          </FooterLinks>
        </Col>
        <Col xs="6" sm="2" md="4" lg="4" alignSelf="center" order="3">
          <FooterLinks>
            <a
              href="https://yallacompare.com/insurance/uae/en/disclaimer"
              target="_blank"
            >
              <T id="FOOTER_LINKS_DISCLAIMER" />
            </a>
          </FooterLinks>
        </Col>
        <Col xs="12" sm="2" md="4" lg="4" alignSelf="center" order="4">
          <FooterLinks>
            <a
              href="https://yallacompare.com/insurance/uae/en/contact-us"
              target="_blank"
            >
              <T id="FOOTER_LINKS_CONTACT_COMPLAINTS" />
            </a>
          </FooterLinks>
        </Col>
        <Col xs="12" sm="2" md="4" lg="4" alignSelf="center" order="5">
          <FooterLinks>
            <a
              href="https://yallacompare.com/insurance/uae/en/about-us"
              target="_blank"
            >
              <T id="FOOTER_LINKS_ABOUT" />
            </a>
          </FooterLinks>
        </Col>
      </Row>
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
