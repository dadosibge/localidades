import axios from 'axios';

declare module 'axios' {
interface AxiosResponse<T = any> extends Promise<T> {}
}

function api(baseURL: string) {
  return axios.create({
    baseURL,
  });
}

export const localidades = api('https://servicodados.ibge.gov.br/api/v1/localidades');
