import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
apiKey: "AIzaSyA-xdeio0RmRnBBVhl6jMN_i6VeqNUFpsU",
authDomain: "auth-fbtut.firebaseapp.com",
databaseURL: "https://auth-fbtut.firebaseio.com",
projectId: "auth-fbtut",
storageBucket: "auth-fbtut.appspot.com",
messagingSenderId: "91453686719",
appId: "1:91453686719:web:b4254801a9a4cd2ef6d70a",
measurementId: "G-HVQ5QM1J25"
};
//console.log(config);

class Firebase {
  
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API *** //
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.authsendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);



//******* USER API ******/

user = uid =>  this.db.ref(`user/${uid}`);

user = () => this.db.ref ('users');

}

export default Firebase;