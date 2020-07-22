import getDistritos from '../../src/distritos/getDistritos';

test('getDistritos, () => {
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
