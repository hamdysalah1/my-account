/**
 * @param {String} endpoint
 * @param {String} method
 * @param {Object} body
 */
export const makeRequest = (endpoint, method = 'GET', body) => {
  console.log('makeRequest body', body);
  const reqProps = {};
  if (!endpoint) {
    throw Error('URL is missing');
  }
  if (method.toLowerCase() === 'post') {
    if (!body || body === '') {
      throw Error('Body is missing');
    }
    reqProps.method = 'POST';
    reqProps.body = JSON.stringify(body);
    reqProps.headers = {
      'content-type': 'application/json',
    };
  }

  return fetch(`${process.env.REACT_APP_HOST}/${endpoint}`, reqProps)
    .then((blob) => blob.json())
    .then((res) => res);
};

export default makeRequest;
