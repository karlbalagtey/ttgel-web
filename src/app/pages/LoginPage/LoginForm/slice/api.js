import axios from 'axios';

export const authenticate = async (email, password) => {
  const URL = `${process.env.REACT_APP_API_URL}auth/login`;

  const { data } = await axios.post(
    URL,
    {
      email: email,
      password: password,
    },
    { withCredentials: true },
  );
  const { token } = data;
  localStorage.setItem('auth', JSON.stringify(token));
  // tokenUtil.setToken(token.access, token.expires);
  return data;
};

export const refreshToken = async () => {
  const URL = `${process.env.REACT_APP_API_URL}auth/refresh-tokens`;

  const { data } = await axios.post(URL, {}, { withCredentials: true });
  localStorage.setItem('auth', JSON.stringify(data));
  return data;
};

export const resetPassword = (token, password, confirmPassword) => {
  const URL = process.env.REACT_APP_API_URL + 'auth/reset-password';

  return axios.post(
    URL,
    {
      token: token,
      password: password,
      confirmPassword: confirmPassword,
    },
    { withCredentials: true },
  );
};

export const signOut = () => {
  const URL = process.env.REACT_APP_API_URL + 'auth/logout';
  localStorage.removeItem('auth');
  return axios.post(URL, {}, { withCredentials: true });
};
