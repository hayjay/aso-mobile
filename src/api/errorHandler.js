const handleError = (err) => {
  let message = '';
  let status;
  if (err.response) {
    // error from API
    console.log('API Error', err.response);

    status = err.response.status;
    message = err.response.data.Detail;
  }

  if (err.request && !err.response) {
    // a network error
    console.log('Network Error', err.request, message);
    if (err.request._response.indexOf('internet') !== -1) {
      message = err.request._response;
    }
  }

  message = message || 'Something went wrong. Please try again';

  return {
    error: {
      status,
      message,
    },
  };
};

export default handleError;
