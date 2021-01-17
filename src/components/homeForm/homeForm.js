import React from 'react';
import { Link } from 'react-router-dom';
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
  ChildrenWrap,
} from './styles/homeFormStyle';
import Button from '../button/button';
import { AppleStoreIcon, PlayStoreIcon } from '../icons';

const HomeForm = ({ formTitle, buttonText, linkTo, children }) => (
  <Card>
    <>
      <FormWrap>
        <Card.Content>
          <Header>
            <h3>
              <T id={formTitle} />
            </h3>
            <Link to={linkTo}>
              <Button.Secondary type="button" fontSize="14">
                <T id={buttonText} />
              </Button.Secondary>
            </Link>
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

HomeForm.Actions = ({ linkTo }) => (
  <ActionsWrap>
    <Link to={linkTo}>
      <ForgotPassword>
        <T id="FORGOT_PASSWORD" />
      </ForgotPassword>
    </Link>
  </ActionsWrap>
);

HomeForm.Actions.propTypes = {
  linkTo: PropTypes.string.isRequired,
};
HomeForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default HomeForm;
