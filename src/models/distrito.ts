import { Municipio } from './municipio';

export interface Distrito {
  id: number;
  nome: string;
  municipio: Municipio;
}
