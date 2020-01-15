import React from 'react';
// import logo from '../../assets/images/ctd-logo.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Dashboard from '../../containers/Dashboard';
import * as ROUTES from '../../constants/routes';
// import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import { withAuthentication } from '../Session';

const App = () => (
	<Router>
		<div className='App'>
			<Navigation />

			<hr />

			<Route exact path={ROUTES.LANDING} component={Dashboard} />

			<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
			<Route path={ROUTES.SIGN_IN} component={SignInPage} />
			<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
			<Route path={ROUTES.HOME} component={HomePage} />
			<Route path={ROUTES.ACCOUNT} component={AccountPage} />
			<Route path={ROUTES.ADMIN} component={AdminPage} />

			<Footer />
		</div>
	</Router>
);

export default withAuthentication(App);
