import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles/cardStyle';

const Card = ({ children }) => <Container> {children} </Container>;

Card.Content = ({ children }) => <Content> {children} </Content>;

Card.Content.propTypes = {
  children: PropTypes.element.isRequired,
};
Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
