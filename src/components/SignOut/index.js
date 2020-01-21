import React from 'react';
// import Game from '../Game'

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
	<button className='signout-btn' type='button' onClick={firebase.doSignOut}>
		Sign Out
	</button>


);

export default withFirebase(SignOutButton);
