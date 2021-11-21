const _apiBase = 'https://swapi.dev/';

const getResource = async (url) => {
  const res = await fetch(`${_apiBase}${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export const getAllPeople = async () => {
  const res = await getResource(`/people/`);
  return res.results;
};

export const getPerson = (id) => {
  return getResource(`/people/${id}`);
};

export const getAllPlanets = async () => {
  const res = await getResource(`/planets/`);
  return res.results;
};

export const getPlanet = (id) => {
  return getResource(`/planets/${id}`);
};

export const getAllStarships = async () => {
  const res = await getResource(`/starships/`);
  return res.results;
};

export const getStarship = (id) => {
  return getResource(`/starships/${id}`);
};
