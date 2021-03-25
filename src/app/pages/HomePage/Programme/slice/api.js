import axios from 'axios';

export const ttgelGetCourses = query => {
  const URL = `${process.env.REACT_APP_API_URL}stores?${query}`;

  return axios.get(URL, {});
};
