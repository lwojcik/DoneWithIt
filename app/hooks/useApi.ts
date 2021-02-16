import {
  useState,
} from 'react';

const useApi = (apiFunc: any) => {
  const [data, setData] = useState([] as any);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    setLoading(true);
    const response = await apiFunc(...args) as any;
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  }

  return {
    request,
    data,
    error,
    loading,
  }

}

export default useApi;
