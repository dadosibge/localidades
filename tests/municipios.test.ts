import municipios from '../src/municipios';
import { AxiosResponse, AxiosError } from 'axios';
import { municipio } from './model';

const success = (response: AxiosResponse) => {
  expect(response.status).toBe(200);
  expect(response.data).toEqual(expect.arrayContaining([municipio]));
};

const invalid = (error: AxiosError) => expect(error?.response?.status).toEqual(500);

const empty = (response: AxiosResponse) => {
  expect(response.status).toBe(200);
  expect(response.data).toEqual(expect.arrayContaining([]));
};

describe('Municipios', () => {
  describe('todos', () => {
    test('todos', () => municipios.todos().then(success));
  });

  describe('porId', () => {
    test('Válido', () => municipios.porId('3100104').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return municipios.porId('qualquer').catch(invalid);
    });

    test('Inexistente', () => municipios.porId('9999999').then(empty));
  });

  describe('porUF', () => {
    test('Válido', () => municipios.porUf('33').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return municipios.porUf('156156651651').catch(invalid);
    });

    test('Inexistente', () => municipios.porUf('99').then(empty));
  });

  describe('porMesorregiao', () => {
    test('Válido', () => municipios.porMesorregiao('1602').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return municipios.porMesorregiao('qualquer').catch(invalid);
    });

    test('Inexistente', () => municipios.porMesorregiao('9999').then(empty));
  });

  describe('porMicrorregiao', () => {
    test('Válido', () => municipios.porMicrorregiao('16003').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return municipios.porMicrorregiao('qualquer').catch(invalid);
    });

    test('Inexistente', () => municipios.porMicrorregiao('99999').then(empty));
  });

  describe('porRegiao', () => {
    test('Válido', () => municipios.porRegiao('3').then(success));

    test('Inválido', () => {
      expect.assertions(2);
      return municipios.porRegiao('qualquer').then(empty);
    });

    test('Inexistente', () => municipios.porRegiao('9').then(empty));
  });
});
