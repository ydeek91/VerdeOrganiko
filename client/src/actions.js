/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as application from './components/Application/actions';
import * as authentication from './components/Authentication/actions';
import * as signup from './components/Signup/actions';
import * as login from './components/Login/actions';
import * as forgotPassword from './components/ForgotPassword/actions';
import * as resetPassword from './components/ResetPassword/actions';


export default function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            ...application,
            ...authentication,
            ...homepage,
            ...signup,
            ...login,
            ...forgotPassword,
            ...navigation,
            ...cart,
            ...newsletter,
            ...customer,
            ...admin,
            ...account,
            ...resetPassword,
            ...users,
            ...product,
            ...category,
            ...brand,
            ...menu,
            ...shop,
            ...merchant,
            ...contact,
            ...order
        },
        dispatch
    );
}