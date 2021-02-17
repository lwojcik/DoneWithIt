import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
  baseURL: 'http://10.0.1.10:9000/api'
});

const get = apiClient.get;
(apiClient as any).get = async (url: any, params: any, axiosConfig: any) => {
  const response = await get(url, params, axiosConfig);

  if(response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? {
    ok: true,
    data,
  }: response;
}

export default apiClient;
