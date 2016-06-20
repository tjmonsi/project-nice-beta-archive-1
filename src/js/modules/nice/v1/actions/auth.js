import {handleAuthError} from './../libs';

export default {
  login: (context, {snackbar}) => {
    const {firebase} = context;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  },
  logout: (context, {snackbar}) => {
    const {firebase} = context;
    firebase.auth().signOut().then(() => {
      if (snackbar) {
        snackbar.showNotification('Successfully logged-out');
      } else {
        alert('successfully logged-out');
      }
    }, (error) => {
      handleAuthError(error, message => {
        if (message) {
          snackbar.showNotification(message);
        } else {
          alert(message);
        }
      });
    });
  }
};
