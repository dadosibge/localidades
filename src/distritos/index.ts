import { AxiosResponse } from 'axios';
import { localidades } from '../core/api';

const todos = (): Promise<AxiosResponse> => localidades.get('/distritos');

const porId = (id: string): Promise<AxiosResponse> => localidades.get(`/distritos/${id}`);

const porUf = (uf: string): Promise<AxiosResponse> => localidades.get(`/estados/${uf}/distritos`);

const porMesorregiao = (mesorregiao: string): Promise<AxiosResponse> =>
  localidades.get(`/mesorregioes/${mesorregiao}/distritos`);

const porMicrorregiao = (microrregiao: string): Promise<AxiosResponse> =>
  localidades.get(`/microrregioes/${microrregiao}/distritos`);

const porMunicipio = (municipio: string): Promise<AxiosResponse> =>
  localidades.get(`/municipios/${municipio}/distritos`);

const porRegiao = (macrorregiao: string): Promise<AxiosResponse> =>
  localidades.get(`/regioes/${macrorregiao}/distritos`);

export default {
  todos,
  porId,
  porUf,
  porMesorregiao,
  porMicrorregiao,
  porMunicipio,
  porRegiao,
};
