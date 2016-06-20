import {handleAuthError} from './../libs';

export const composeNav = ({context, actions, snackbar}, onData) => {
  const {firebase} = context();
  const {auth} = actions();
  const {login, logout} = auth;

  firebase.auth().onAuthStateChanged((user) => {
    const links = [];

    if (user) {
      firebase.auth().getRedirectResult().then(result => {
        if (result) {
          const {user: u} = result;
          if (u) {
            const {displayName} = u;
            if (snackbar) {
              snackbar.showNotification(`Hello ${displayName}`);
            } else {
              alert(`Hello ${displayName}`);
            }
          }
        }
      }, error => {
        handleAuthError(error, message => {
          if (message) {
            snackbar.showNotification(message);
          } else {
            alert(message);
          }
        });
      });
    }

    if (user) {
      links.push({
        name: 'Dashboard',
        url: '/dashboard'
      });
    }
    // links.push({
    //   name: 'Dropdown',
    //   links: [
    //     {
    //       name: 'Link1'
    //     }
    //   ]
    // });
    links.push({
      name: 'Articles',
      url: '/articles'
    });
    links.push({
      name: 'Infographs',
      url: '/infographs'
    });

    if (user) {
      links.push({
        name: 'Profile',
        url: '/profile'
      });
      links.push({
        name: 'Logout',
        actionHandler: () => {logout({snackbar})}
      });
    } else {
      links.push({
        name: 'Login',
        actionHandler: () => {login({snackbar})}
      });
    }
    onData(null, {links});
  });
};
