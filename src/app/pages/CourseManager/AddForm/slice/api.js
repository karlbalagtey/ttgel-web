import axios from 'axios';

export const addBasicCourse = async courseDetails => {
  const URL = `${process.env.REACT_APP_API_URL}course`;

  return await axios.post(URL, { courseDetails }, { withCredentials: true });
};
