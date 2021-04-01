import axios from 'axios';

export const authenticate = async (email, password) => {
  const URL = `${process.env.REACT_APP_API_URL}auth/login`;
  console.log(email, password);
  const { data } = await axios.post(
    URL,
    {
      email: email,
      password: password,
    },
    { withCredentials: true },
  );
  // const { user, token } = data;
  // tokenUtil.setToken(token.access, token.expires);
  return data;
};

export const refreshToken = () => {
  const URL = `${process.env.REACT_APP_API_URL}auth/refresh-tokens`;

  return axios.post(URL, {});
};

// export const checkAuth = async () => {
//   const token = tokenUtil.getToken();

//   if (!token) {
//     const res = await tokenUtil.getRefreshToken();
//     return Promise.resolve(res);
//   }
// };

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

  return axios.post(URL, {}, { withCredentials: true });
};
