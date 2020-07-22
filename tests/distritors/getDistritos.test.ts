import getDistritos from '../../src/distritos/getDistritos';

test('the data is peanut butter', () => {
  return getDistritos().then((response) => {
    expect(response.status).toBe(200);

    expect(response.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          municipio: expect.any(Object),
          nome: expect.any(String),
        }),
      ]),
    );
  });
});
