import distritos from '../../src/distritos';
import { AxiosResponse, AxiosError } from 'axios';

const distrito = expect.objectContaining({
  id: expect.any(Number),
  municipio: expect.any(Object),
  nome: expect.any(String),
});

const success = (response: AxiosResponse) => {
  expect(response.status).toBe(200);
  expect(response.data).toEqual(expect.arrayContaining([distrito]));
};

const invalid = (error: AxiosError) => expect(error?.response?.status).toEqual(500);

const empty = (response: AxiosResponse) => {
  expect(response.status).toBe(200);
  expect(response.data).toEqual(expect.arrayContaining([]));
};

describe('Distritos', () => {
  describe('todos', () => {
    test('todos', () => distritos.todos().then(success));
  });

  describe('porId', () => {
    test('Válido', () => distritos.porId('160030312').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return distritos.porId('qualquer').catch(invalid);
    });

    test('Inexistente', () => distritos.porId('111111111').then(empty));
  });

  describe('porUF', () => {
    test('Válido', () => distritos.porUf('33').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return distritos.porUf('156156651651').catch(invalid);
    });

    test('Inexistente', () => distritos.porUf('99').then(empty));
  });

  describe('porMesorregiao', () => {
    test('Válido', () => distritos.porMesorregiao('1602').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return distritos.porMesorregiao('qualquer').catch(invalid);
    });

    test('Inexistente', () => distritos.porMesorregiao('9999').then(empty));
  });

  describe('porMicrorregiao', () => {
    test('Válido', () => distritos.porMicrorregiao('16003').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return distritos.porMicrorregiao('qualquer').catch(invalid);
    });

    test('Inexistente', () => distritos.porMicrorregiao('99999').then(empty));
  });

  describe('porMunicipio', () => {
    test('Válido', () => distritos.porMunicipio('3550308').then(success));

    test('Inválido', () => {
      expect.assertions(1);
      return distritos.porMunicipio('qualquer').catch(invalid);
    });

    test('Inexistente', () => distritos.porMunicipio('9999999').then(empty));
  });

  describe('porRegiao', () => {
    test('Válido', () => distritos.porRegiao('3').then(success));

    test('Inválido', () => {
      expect.assertions(2);
      return distritos.porRegiao('qualquer').then(empty);
    });

    test('Inexistente', () => distritos.porRegiao('9').then(empty));
  });
});
