export const handleError = error => {
  const { response } = error;
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
