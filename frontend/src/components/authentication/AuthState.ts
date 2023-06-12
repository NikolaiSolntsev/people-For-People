import User from './UserType';

type AuthState = {
  authChecked: boolean;
  user?: User;
  loginFormError?: string;
  registerFormError?: string;
};
export default AuthState;
