/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as application from './components/Application/actions';
import * as authentication from './components/Authentication/actions';
import * as homepage from './components/Homepage/actions';
import * as signup from './components/Signup/actions';
import * as login from './components/Login/actions';
import * as forgotPassword from './components/ForgotPassword/actions';
import * as navigation from './components/Navigation/actions';
import * as cart from './components/Cart/actions';
import * as newsletter from './components/Newsletter/actions';
import * as customer from './components/Customer/actions';
import * as admin from './components/Admin/actions';
import * as account from './components/Account/actions';
import * as resetPassword from './components/ResetPassword/actions';
import * as users from './components/Users/actions';
import * as product from './components/Product/actions';
import * as category from './components/Category/actions';
import * as brand from './components/Brand/actions';
import * as menu from './components/NavigationMenu/actions';
import * as shop from './components/Shop/actions';
import * as merchant from './components/Merchant/actions';
import * as contact from './components/Contact/actions';
import * as order from './components/Order/actions';

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