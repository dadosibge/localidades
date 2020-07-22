import axios from 'axios';

function api(baseURL: string) {
  return axios.create({
    baseURL,
  });
}

export const localidades = api('https://servicodados.ibge.gov.br/api/v1/localidades');
