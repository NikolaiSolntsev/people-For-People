import User from '../user/type/User';

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
  const data = await response.json();
  return data;
};
