type User = {
  id?: number;
  name?: string;
  password?: string;
  repeatPassword?:string;
  newPassword?: string;

  email?: string;
  language?: string;
  phone?: string;
  score?: number;
  photo?: string;
  error?: boolean;
};

export default User;
