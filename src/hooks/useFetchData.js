import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [data, setData] = useState({
    request: null,
    response: null,
    error: null,
    loading: false,
  });
  const fetchData = async () => {
    if (data.request) {
      try {
        const res = await data.request;
        console.log('res', res);
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
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [data, setData];
};

export default useFetchData;
