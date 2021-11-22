const _apiBase = 'http://swapi.dev/api';

const getResource = async (url) => {
  const res = await fetch(`${_apiBase}${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export const getAllPeople = async () => {
  const res = await getResource(`/people/`);
  return res.results.map(_transformPerson);
};

export const getPerson = async (id) => {
  const persone = await getResource(`/people/${id}`);
  return _transformPerson(persone);
};

export const getAllPlanets = async () => {
  const res = await getResource(`/planets/`);
  return res.results.map(_transformPlanet);
};

export const getPlanet = async (id) => {
  const planet = await getResource(`/planets/${id}`);
  return _transformPlanet(planet);
};

export const getAllStarships = async () => {
  const res = await getResource(`/starships/`);
  return res.results.map(_transformStarship);
};

export const getStarship = async (id) => {
  const starship = await getResource(`/starships/${id}`);
  return _transformStarship(starship);
};

const _extractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
};

const _transformPlanet = (planet) => {
  return {
    id: _extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.orbital_period,
    diameter: planet.diameter,
  };
};
const _transformStarship = (starship) => {
  return {
    id: _extractId(starship),
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
  };
};
const _transformPerson = (person) => {
  return {
    id: _extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  };
};
