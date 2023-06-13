import User from './User';

type UserState = {
  user: User | undefined;
  error: string | undefined;
};

export default UserState;
