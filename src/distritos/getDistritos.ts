import { localidades } from '../core/api';
import { AxiosResponse } from 'axios';

export default (): Promise<AxiosResponse> => localidades.get('/distritos');
