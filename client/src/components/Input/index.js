/**
 *
 * Input
 *
 */

import React from 'react';

const Input = props => {
    const {
        type,
        value,
        error,
        step,
        decimals,
        min,
        max,
        disabled,
        placeholder,
        rows,
        label,
        name,
        onInputChange,
        inlineElement
    } = props;

    const _onChange = e => {
        onInputChange(e.target.name, e.target.value);
    };