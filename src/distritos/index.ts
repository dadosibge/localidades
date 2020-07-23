import { AxiosResponse } from 'axios';
import { localidades } from '../core/api';
import { Distrito } from '../models/distrito';

type Response<T> = Promise<AxiosResponse<T>>;

const todos = (): Response<Distrito[]> => localidades.get('/distritos');

const porId = (id: string): Response<Distrito> => localidades.get<Distrito>(`/distritos/${id}`);

const porUf = (uf: string): Response<Distrito[]> => localidades.get(`/estados/${uf}/distritos`);

const porMesorregiao = (mesorregiao: string): Response<Distrito[]> =>
  localidades.get(`/mesorregioes/${mesorregiao}/distritos`);

const porMicrorregiao = (microrregiao: string): Response<Distrito[]> =>
  localidades.get(`/microrregioes/${microrregiao}/distritos`);

const porMunicipio = (municipio: string): Response<Distrito[]> => localidades.get(`/municipios/${municipio}/distritos`);

const porRegiao = (macrorregiao: string): Response<Distrito[]> => localidades.get(`/regioes/${macrorregiao}/distritos`);

export default {
  todos,
  porId,
  porUf,
  porMesorregiao,
  porMicrorregiao,
  porMunicipio,
  porRegiao,
};
