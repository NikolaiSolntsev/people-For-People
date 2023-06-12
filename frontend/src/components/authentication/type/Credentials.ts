export type User = {
  id?: number;
  name?: string;
  password?: string;
  email?: string;
  language?: string;
  phone?: string;
  score?: number;
  photo?: string;
  error?: boolean;
};

type Credentials = {
  id?: number;
  name?: string;
  password?: string;
  email?: string;
  language?: string;
  phone?: string;
  score?: number;
  photo?: string;
  error?: boolean;
};

export default Credentials;
