import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { SignUpLink } from '../../components/SignUp';

class landing extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		loading: false
	// 	};
	// }
	// componentDidMount() {}

	render() {
		return (
			<div className='view-container landing'>
				<div className='landing-content'>
					<h4>RPS 2020</h4>
					<p>
						Welcome to a React Web-app of the classic game of Rock, Paper,
						Scissors! If you have a account already please feel free to
						<Link className='link-tag' to={ROUTES.SIGN_IN}> Sign In </Link>
						or feel free to create a new account to be able to play the game.
					</p>

					<div>
					
						<SignUpLink />
					</div>
				</div>
			</div>
		);
	}
}

export default landing;
