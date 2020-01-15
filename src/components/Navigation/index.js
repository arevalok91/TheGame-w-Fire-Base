import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes.js';
import Logo from '../../assets/images/ctd-logo.png';

import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import { auth } from 'firebase';

const Navigation = () => (
	<div>
		<AuthUserContext.Consumer>
			{(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
		</AuthUserContext.Consumer>
	</div>
);

const NavigationAuth = () => (
	// <nav className='navigation'>
	// 	<div className='nav-content'>
	// 		<div className='logo-wrapper'>{/* <img src={Logo} alt=''/> */}</div>
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.HOME}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</li>
		<li>
			<Link to={ROUTES.ADMIN}>ADMIN</Link>
		</li>
		<li>
			<SignOutButton />
		</li>
	</ul>
	// 	</div>

	// </nav>
);

const NavigationNonAuth = () => (
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.SIGN_IN}>Sign In</Link>
		</li>
	</ul>
);

export default Navigation;
