import { AxiosResponse } from 'axios';
import { localidades } from '../core/api';
import { Municipio } from '../models/municipio';

type Response<T> = Promise<AxiosResponse<T>>;

const todos = (): Response<Municipio[]> => localidades.get(`/municipios`);

const porUf = (uf: string): Response<Municipio[]> => localidades.get(`/estados/${uf}/municipios`);

const porMesorregiao = (mesorregiao: string): Response<Municipio[]> =>
  localidades.get(`/mesorregioes/${mesorregiao}/municipios`);

const porMicrorregiao = (microrregiao: string): Response<Municipio[]> =>
  localidades.get(`/microrregioes/${microrregiao}/municipios`);

const porId = (id: string): Response<Municipio> => localidades.get(`/municipios/${id}`);

const porRegiao = (macrorregiao: string): Response<Municipio[]> =>
  localidades.get(`/regioes/${macrorregiao}/municipios`);

export default {
  todos,
  porUf,
  porMesorregiao,
  porMicrorregiao,
  porId,
  porRegiao,
};
