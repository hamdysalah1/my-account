/**
 * @param {String} endpoint
 * @param {String} method
 * @param {Object} body
 */
const makeRequest = (endpoint, method = 'GET', body) => {
  const reqProps = {};
  if (method.toLowerCase() === 'post') {
    reqProps.method = 'POST';
    reqProps.body = JSON.stringify(body);
    reqProps.headers = {
      'content-type': 'application/json',
    };
  }

  return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, reqProps)
    .then((blob) => blob.json())
    .then((res) => res);
};

export default makeRequest;
