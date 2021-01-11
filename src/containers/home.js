import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'thegridsys';
import { Hero, HomeForm } from '../components';
import { Responsive } from '../helper';

function HomeContainer() {
  return (
    <Container>
      <Row>
        <Responsive>
          {(r) => (
            <>
              {r.desktop && (
                <>
                  <Col md={6} xs={12}>
                    <Hero.Title title="HOME_PAGE_TITLE_TEXT" />
                    <Hero.Paragraph paragraph="HOME_PAGE_TITLE_TEXT" />
                  </Col>
                  <Col md={6} xs={12}>
                    <HomeForm
                      formTitle="SIGN_UP_TEXT"
                      buttonOnClick={() => {}}
                      buttonText="LOGIN_TEXT"
                    />
                  </Col>
                </>
              )}
            </>
          )}
        </Responsive>
      </Row>
    </Container>
  );
}

HomeContainer.propTypes = {};

export default HomeContainer;
