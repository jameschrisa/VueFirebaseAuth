export const handleError = (error) => {
  console.error('An error occurred:', error);

  switch(error.code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password';
    case 'auth/invalid-email':
      return 'Invalid email';
    case 'auth/user-disabled':
      return 'This account has been disabled';
    case 'auth/email-already-in-use':
      return 'Email already in use';
    case 'auth/weak-password':
      return 'Password is too weak';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
};
