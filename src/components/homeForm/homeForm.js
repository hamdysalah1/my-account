import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import T from '../T';
import { Header, FormWrap, Footer } from './styles/homeFormStyle';
import { Rounded } from '../../utils';

const HomeForm = ({ formTitle, buttonText, buttonOnClick }) => (
  <Card>
    {/* <FormWrap>
      <Card.Content>
        <Header>
          <h3>
            <T id={formTitle} />
          </h3>
          <button type="button" onClick={() => buttonOnClick}>
            <T id={buttonText} />
          </button>
        </Header>
      </Card.Content>
    </FormWrap>
    <Footer>
      <Card.Content>
        <Rounded backgroundColor="#000" color="#fff" width="60px" height="60px">
          <T id="HOME_FORM_OR" />
        </Rounded>
      </Card.Content>
    </Footer> */}
  </Card>
);

HomeForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
};

export default HomeForm;
