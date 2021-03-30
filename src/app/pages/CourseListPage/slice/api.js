import axios from 'axios';

export const getProgrammes = query => {
  const URL = `${process.env.REACT_APP_API_URL}programmes`;

  return axios.get(URL, {});
};

export const getOneProgramme = id => {
  const URL = `${process.env.REACT_APP_API_URL}programmes/${id}`;

  return axios.get(URL, {});
};
