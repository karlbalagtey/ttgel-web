export const handleError = error => {
  const { response } = error;

  if (response && response.payload && response.payload === 401) {
    console.log(response.payload);
    return false;
  }

  if (response) {
    return response.data.message;
  } else {
    const response = {
      status: error.status,
      message: error.message,
    };
    return response.message;
  }
};
