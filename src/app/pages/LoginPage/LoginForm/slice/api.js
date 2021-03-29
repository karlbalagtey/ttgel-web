import axios from 'axios';

export const authenticate = (email, password) => {
  const URL = `${process.env.REACT_APP_API_URL}auth/login`;

  return axios.post(
    URL,
    {
      email: email,
      password: password,
    },
    { withCredentials: true },
  );
};
