import React from 'react';
import { Link }  from 'react-router-dom';

// import Game from '../Game'

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => {
	return (
		<Link to = '/signin'>
			<button className='signout-btn' type='button' onClick={firebase.doSignOut}>Sign Out</button>
		</Link>
	)
}

export default withFirebase(SignOutButton);
