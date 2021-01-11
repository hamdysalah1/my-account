import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import T from '../T';
import {
  Header,
  FormWrap,
  Footer,
  SocialBtn,
  SocialBtnWrap,
  SocialWrap,
  Contact,
} from './styles/homeFormStyle';
import { Rounded, Badge } from '../../utils';
import {
  FacebookIcon,
  GoogleIcon,
  AppleStoreIcon,
  PlayStoreIcon,
} from '../icons';

const HomeForm = ({ formTitle, buttonText, buttonOnClick, children }) => (
  <Card>
    <>
      <FormWrap>
        <Card.Content>
          <Header>
            <h3>
              <T id={formTitle} />
            </h3>
            <button type="button" onClick={() => buttonOnClick}>
              <T id={buttonText} />
            </button>
          </Header>
          {children}
        </Card.Content>
      </FormWrap>
      <Footer>
        <Card.Content>
          <SocialWrap>
            <Rounded
              backgroundColor="#000"
              color="#fff"
              width="60px"
              height="60px"
            >
              <T id="HOME_FORM_OR" />
            </Rounded>
            <p>
              <T id="LOGIN_WITH_SOCIAL" />
            </p>
            <SocialBtnWrap>
              <Badge backgroundColor="#fff">
                <SocialBtn>
                  <FacebookIcon />
                  <p> Facebook </p>
                </SocialBtn>
              </Badge>
              <Badge backgroundColor="#fff">
                <SocialBtn>
                  <GoogleIcon />
                  <p> Google </p>
                </SocialBtn>
              </Badge>
            </SocialBtnWrap>
          </SocialWrap>
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

HomeForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default HomeForm;
