import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
	<div>
		<h1 className="signin-title">Sign In</h1>
		<SignInForm />
		<PasswordForgetLink />
		<SignUpLink />
	</div>
);

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null
};

class SignInFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const { email, password } = this.state;

		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.HOME);
			})
			.catch((error) => {
				this.setState({ error });
			});

		event.preventDefault();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { email, password, error } = this.state;

		const isInvalid = password === '' || email === '';

		return (
			<form  className='forms' onSubmit={this.onSubmit}>

				<div className='signin-form-container'>
				<input 
				className="inputs-signin"
					name='email'
					value={email}
					onChange={this.onChange}
					type='text'
					placeholder='Email Address'
				/>
				<input
				className="inputs-signin"
					name='password'
					value={password}
					onChange={this.onChange}
					type='password'
					placeholder='Password'
				/>
				<button className="signin-btn" disabled={isInvalid} type='submit'>
					Sign In
				</button>
				</div>

				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
