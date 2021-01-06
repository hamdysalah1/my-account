import { useState, useEffect } from 'react';

const useFetchData = (_data) => {
  const [data, setData] = useState({
    response: null,
    error: null,
    loading: true,
  });
  const fetchData = async () => {
    try {
      const res = await _data;
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
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { ...data };
};

export default useFetchData;
