/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Row, Col } from 'thegridsys';
import styled from 'styled-components';
import Responsive from '../../../helper/responsive';
import T from '../../T';

const FooterLinks = styled.div`
  font-weight: bold;
  a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
  }
`;
const Footer = () => (
  <Row
    alignContent="flex-start"
    alignItems="center"
    justifyContent="space-between"
  >
    <Col className="" xs="12" sm="2" md="4" lg="4" alignSelf="center" order="1">
      <FooterLinks>
        <a
          href="https://yallacompare.com/insurance/uae/en/terms-and-conditions"
          target="_blank"
        >
          <T id="FOOTER_LINKS_TERMS" />;
        </a>
      </FooterLinks>
    </Col>
    <Col className="" xs="12" sm="2" md="4" lg="4" alignSelf="center" order="2">
      <FooterLinks>
        <a
          href="https://yallacompare.com/insurance/uae/en/privacy-policy"
          target="_blank"
        >
          Privacy Policy
        </a>
      </FooterLinks>
    </Col>
    <Col className="" xs="12" sm="2" md="4" lg="4" alignSelf="center" order="3">
      <FooterLinks>
        <a
          href="https://yallacompare.com/insurance/uae/en/disclaimer"
          target="_blank"
        >
          Disclaimer
        </a>
      </FooterLinks>
    </Col>
    <Col className="" xs="12" sm="2" md="4" lg="4" alignSelf="center" order="4">
      <FooterLinks>
        <a
          href="https://yallacompare.com/insurance/uae/en/contact-us"
          target="_blank"
        >
          Contact Us / Complaints
        </a>
      </FooterLinks>
    </Col>
    <Col className="" xs="12" sm="2" md="4" lg="4" alignSelf="center" order="5">
      <FooterLinks>
        <a
          href="https://yallacompare.com/insurance/uae/en/about-us"
          target="_blank"
        >
          About Us
        </a>
      </FooterLinks>
    </Col>
  </Row>
);
export default Footer;
