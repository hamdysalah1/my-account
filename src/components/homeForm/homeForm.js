import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import T from '../T';
import {
  Header,
  FormWrap,
  Footer,
  Contact,
  ForgotPassword,
  ActionsWrap,
  RememberMe,
  ChildrenWrap,
} from './styles/homeFormStyle';
import Button from '../button/button';
import { CheckboxField } from '../form/fields';
import { AppleStoreIcon, PlayStoreIcon } from '../icons';

const HomeForm = ({ formTitle, buttonText, buttonOnClick, children }) => (
  <Card>
    <>
      <FormWrap>
        <Card.Content>
          <Header>
            <h3>
              <T id={formTitle} />
            </h3>
            <Button.Secondary
              type="button"
              fontSize="14"
              onClick={buttonOnClick}
            >
              <T id={buttonText} />
            </Button.Secondary>
          </Header>
          <ChildrenWrap>{children}</ChildrenWrap>
        </Card.Content>
      </FormWrap>
      <Footer>
        <Card.Content>
          <Contact>
            <p>
              <T id="HOME_CONTACT_NUMBER" />
            </p>
            <a
              href="https://itunes.apple.com/ae/app/yallacompare/id1392871524?mt=8"
              target="_blank"
              rel="noreferrer"
            >
              <AppleStoreIcon />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.yallacompare.yallacompareapp"
              target="_blank"
              rel="noreferrer"
            >
              <PlayStoreIcon />
            </a>
          </Contact>
        </Card.Content>
      </Footer>
    </>
  </Card>
);

HomeForm.Actions = () => (
  <ActionsWrap>
    <ForgotPassword href="#"> Forgot Password? </ForgotPassword>
  </ActionsWrap>
);
HomeForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default HomeForm;
