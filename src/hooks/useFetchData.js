import { useState, useEffect } from 'react';
import { makeRequest } from '../utils/makeRequest';

const useFetchData = ({ url, method, body }) => {
  const [data, setData] = useState({
    response: null,
    error: null,
    loading: true,
  });
  const fetchData = async () => {
    try {
      const res = await makeRequest(url, method, body);
      setData({
        response: res,
        loading: false,
        error: null,
      });
    } catch (error) {
      setData({
        response: null,
        error,
        loading: false,
      });
      throw error;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { ...data };
};

export default useFetchData;
