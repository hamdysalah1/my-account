import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'thegridsys';
import { Hero, HomeForm } from '../components';
import { Responsive } from '../helper';
import Form from './form';

function AuthContainer({
  formFields,
  onSubmit,
  formTitle,
  buttonOnClick,
  buttonText,
  serverMessage,
}) {
  return (
    <Container>
      <Responsive>
        {(r) => (
          <>
            {r.tablet || r.desktop ? (
              <Row alignItems="center">
                <Col md={6} xs={12}>
                  <Hero.Title title="HOME_PAGE_TITLE_TEXT" />
                  <Hero.Paragraph paragraph="HOME_PAGE_P_TEXT" />
                </Col>
                <Col md={6} xs={12}>
                  <HomeForm
                    formTitle={formTitle}
                    buttonOnClick={buttonOnClick}
                    buttonText={buttonText}
                  >
                    <Form
                      fields={formFields}
                      onSubmit={onSubmit}
                      serverMessage={serverMessage}
                      afterLoop={<HomeForm.Actions />}
                    />
                  </HomeForm>
                </Col>
              </Row>
            ) : (
              <HomeForm
                formTitle={formTitle}
                buttonOnClick={buttonOnClick}
                buttonText={buttonText}
              >
                <Form
                  fields={formFields}
                  onSubmit={onSubmit}
                  afterLoop={<HomeForm.Actions />}
                />
              </HomeForm>
            )}
          </>
        )}
      </Responsive>
    </Container>
  );
}

AuthContainer.defaultProps = {
  serverMessage: '',
};
AuthContainer.propTypes = {
  formFields: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  serverMessage: PropTypes.string,
};

export default AuthContainer;
