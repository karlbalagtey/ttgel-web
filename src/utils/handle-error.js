export const handleError = error => {
  const { response } = error;

  if (response) {
    return response.message;
  } else {
    const response = {
      status: error.request.status,
      message: error.request.message,
    };
    return response.message;
  }
};
