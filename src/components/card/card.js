import React from 'react';
import PropTypes from 'prop-types';
import { Details, Title } from './styles/cardStyle';

const Card = ({ name, children }) => (
  <>
    <div>Hello, {name}</div>
    {children}
  </>
);

Card.Title = ({ title }) => <Title> {title} </Title>;

Card.Details = ({ details }) => <Details> {details} </Details>;

Card.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
};
Card.Title.propTypes = {
  title: PropTypes.string.isRequired,
};
Card.Details.propTypes = {
  details: PropTypes.string.isRequired,
};
Card.defaultProps = {
  name: 'Hamdy',
};
export default Card;
