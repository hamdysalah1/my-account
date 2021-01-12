import React from 'react';
import PropTypes from 'prop-types';
import { Title, Paragraph } from './styles/heroStyle';
import T from '../T';

const Hero = ({ children }) => ({ children });

Hero.Title = ({ title }) => (
  <Title>
    <T id={title} />
  </Title>
);
Hero.Paragraph = ({ paragraph }) => (
  <Paragraph>
    <T id={paragraph} />
  </Paragraph>
);

Hero.propTypes = {
  children: PropTypes.element.isRequired,
};

Hero.Title.defaultProps = {
  title: '',
};
Hero.Paragraph.defaultProps = {
  paragraph: '',
};
Hero.Title.propTypes = {
  title: PropTypes.string,
};
Hero.Paragraph.propTypes = {
  paragraph: PropTypes.string,
};

export default Hero;
