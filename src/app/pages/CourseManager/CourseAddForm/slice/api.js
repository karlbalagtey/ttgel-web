import axios from 'axios';

export const addBasicCourse = async course => {
  const URL = `${process.env.REACT_APP_API_URL}courses`;
  console.log(course);
  return await axios.post(URL, course, { withCredentials: true });
};

export const addCourseImage = async form => {
  const URL = `${process.env.REACT_APP_API_URL}upload/image`;

  console.log(form);
  const formData = new FormData();
  formData.append('image', form);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const { data } = await axios.post(URL, formData, config);
  console.log(data);
  return data;
};
