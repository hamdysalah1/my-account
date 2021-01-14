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
  ForgotPassword,
  ActionsWrap,
  RememberMe,
  ChildrenWrap,
} from './styles/homeFormStyle';
import Button from '../button/button';
import { CheckboxField } from '../form/fields';
import { Rounded, Badge } from '../../utils';
import { AppleStoreIcon, PlayStoreIcon } from '../icons';
import SocialButtons from '../socialButtons/socialButtons';

const HomeForm = ({
  formTitle,
  buttonText,
  buttonOnClick,
  children,
  facebookCallback,
  googleCallback,
}) => (
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
                  <SocialButtons.Facebook facebookCallback={facebookCallback} />
                </SocialBtn>
              </Badge>
              <Badge backgroundColor="#fff">
                <SocialBtn>
                  <SocialButtons.Google googleCallback={googleCallback} />
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

HomeForm.Actions = () => (
  <ActionsWrap>
    <RememberMe>
      <CheckboxField
        labelText="Remember me"
        name="remember"
        id="remember"
        rules={React.createRef()}
      />
    </RememberMe>
    <ForgotPassword href="#"> Forgot Password? </ForgotPassword>
  </ActionsWrap>
);
HomeForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  facebookCallback: PropTypes.func.isRequired,
  googleCallback: PropTypes.func.isRequired,
};

export default HomeForm;
