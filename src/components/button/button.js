import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './styles/buttonStyle';

const Button = ({ children }) => (
    <div>
        <h1> Hello I&apos;m COM Component </h1>
        {children}
    </div>
);

Button.Inner = ({ content }) => <Content>{content}</Content>

Button.propTypes = {
    children: PropTypes.element.isRequired,
};
Button.Inner.propTypes = {
    content: PropTypes.string.isRequired
};


export default Button