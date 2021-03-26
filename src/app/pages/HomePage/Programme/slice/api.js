import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getProgrammes = query => {
  const URL = `${process.env.REACT_APP_API_URL}programmes`;

  return axios.get(URL, {});
};
