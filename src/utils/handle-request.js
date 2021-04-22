export const prepareOptions = (
  method,
  { data, params, successMessage, headers },
) => {
  return {
    requestOptions: {
      method: method || 'GET',
      headers: headers,
      data,
    },
    params,
    successMessage,
  };
};
