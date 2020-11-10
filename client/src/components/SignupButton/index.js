/**
 *
 * Button
 *
 */

import React from 'react';

const variants = {
    primary: 'custom-btn-primary',
    secondary: 'custom-btn-secondary',
    danger: 'custom-btn-danger',
    link: 'custom-btn-link'
};

const Button = props => {
    const {
        id,
        size,
        variant,
        tabIndex,
        ariaLabel,
        ariaExpanded,
        type,
        disabled,
        className,
        text,
        role,
        icon,
        onClick
    } = props;
