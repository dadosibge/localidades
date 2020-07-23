export const municipio = expect.objectContaining({
  id: expect.any(Number),
  nome: expect.any(String),
  microrregiao: expect.any(Object),
});

export const distrito = expect.objectContaining({
  id: expect.any(Number),
  nome: expect.any(String),
  municipio,
});
