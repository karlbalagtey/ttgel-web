import axios from 'axios';

export const getCourseDetails = id => {
  const { access } = JSON.parse(localStorage.getItem('auth'));
  const URL = `${process.env.REACT_APP_API_URL}courses/${id}`;

  return axios.get(URL, {
    headers: {
      Authorization: 'Bearer ' + access,
    },
    withCredentials: true,
  });
};

export const getModules = id => {
  const { access } = JSON.parse(localStorage.getItem('auth'));
  const URL = `${process.env.REACT_APP_API_URL}courses/${id}/modules`;

  return axios.get(URL, {
    headers: {
      Authorization: 'Bearer ' + access,
    },
    withCredentials: true,
  });
};
