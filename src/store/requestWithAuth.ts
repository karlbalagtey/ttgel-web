import axios from 'axios';

export function requestWithAuth(url, options) {
  const { access } = JSON.parse(localStorage.getItem('auth'));
  const optionsWithAuth = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: 'Bearer ' + access,
    },
    withCredentials: true,
  };

  if (!url) {
    throw new Error('Url cannot be empty');
  }

  return axios({ url: url, optionsWithAuth })
    .then(res => {
      return res;
    })
    .catch(error => {
      if (
        error.response &&
        (error.response.status === 401 || error.status === 401)
      ) {
        // redirect
        // refresh
        console.log('Session ended');
      } else {
        throw error;
      }
    });
}
