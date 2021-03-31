import axios from 'axios';

const { access } = JSON.parse(localStorage.getItem('auth'));

export const getCourseDetails = id => {
  const URL = `${process.env.REACT_APP_API_URL}courses/${id}`;

  return axios.get(URL, {
    headers: {
      Authorization: 'Bearer ' + access,
    },
    withCredentials: true,
  });
};

export const getModules = id => {
  const URL = `${process.env.REACT_APP_API_URL}courses/${id}/modules`;

  return axios.get(URL, {
    headers: {
      Authorization: 'Bearer ' + access,
    },
    withCredentials: true,
  });
};
