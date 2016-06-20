export const handleAuthError = (error, callback) => {
  // TODO: auth/account-exists-with-different-credential

  const {code} = error;

  const ourProblem = 'We are currently fixing this right now. Sorry :)';
  const contactUs = 'Please contact us if problem still persists';

  switch (code) {
    case 'auth/timeout':
      return `Timeout!!! ${ourProblem}`;
    case 'auth/operation-not-supported-in-this-environment':
      return `Operation is not supported. ${ourProblem}`;
    case 'auth/operation-not-allowed':
      return `Operation not allowed as of the moment. ${ourProblem}`;
    case 'auth/credential-already-in-use':
      return `Account is already in use by another user. ${contactUs}`;
    case 'auth/auth-domain-config-required':
      return `App Configurations not working. ${ourProblem}`;
    case 'auth/unauthorized-domain':
      return `Domain problem. ${ourProblem}`;
    default:
      return;
  }
};
