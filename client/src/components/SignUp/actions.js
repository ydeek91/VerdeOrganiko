
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
    SIGNUP_CHANGE,
    SIGNUP_RESET,
    SET_SIGNUP_LOADING,
    SET_SIGNUP_SUBMITTING,
    SUBSCRIBE_CHANGE,
    SET_SIGNUP_FORM_ERRORS
} from './constants';

import { setAuth } from '../Authentication/actions';
import setToken from '../../utils/token';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';

export const signupChange = (name, value) => {
    let formData = {};
    formData[name] = value;