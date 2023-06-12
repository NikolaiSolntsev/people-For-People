import User from './UserType';
import Credentials from './Credentials';
import RegistrationData from './RegistrationData';

export async function user(): Promise<
  { isLoggedIn: true; user: User } | { isLoggedIn: false }
> {
  return (await fetch('/api/auth/user')).json();
}

// eslint-disable-next-line import/prefer-default-export
export async function registrationFetch(data: RegistrationData): Promise<User> {
  const response = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const { message } = await response.json();
    throw message;
  }
  return response.json();
}

export async function loginFetch(credentials: Credentials): Promise<User> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const { message } = await response.json();
    throw message;
  }
  return response.json();
}

export const logoutFetch = async (): Promise<void> => {

  const response = await fetch('/api/auth/logout');
  const res = await response.json();
 

  if (!response.ok) {
    const { message } = await response.json();
    throw message;
  }
};


export const  checkUser = async (): Promise<User> => {
 const response = await fetch('/api/auth/check')
 const data = await response.json();
 const {user} = data;
 return user;
}
