import User from '../user/type/User';
import Credentials from './type/Credentials';

// eslint-disable-next-line import/prefer-default-export
export const registrationFetch = async (obj: User): Promise<User> => {
  const response = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  if (!response.ok) {
    const { message } = await response.json();
    throw message;
  }
  const { user } = await response.json();
  return user;
};


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
  const { user } = await response.json();
  return user;
}

export const logoutFetch = async (): Promise<void> => {
  const response = await fetch('/api/auth/logout');

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
};

export const changeUserFetch = async (obj: User): Promise<User> => {
  const response = await fetch('/api/auth/change', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  if (!response.ok) {
    const { message } = await response.json();
    throw message;
  }
  const { user } = await response.json();
  return user;
};

