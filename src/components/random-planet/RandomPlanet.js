import React, { useState, useEffect } from 'react';
import './random-planet.css';
import { getPlanet } from '../../services/services';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../error-indicator';

function RandomPlanet() {
  const [planet, setPlanet] = useState({
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;

    let cancelled = false;
    getPlanet(id)
      .then((planet) => {
        if (!cancelled) {
          setPlanet(planet);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
    return () => (cancelled = true);
  };

  useEffect(() => {
    updatePlanet();

    let timerId = setInterval(updatePlanet, 3000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className='random-planet mt-5 mb-5'>
      {loading ? <Spinner /> : null}
      {!loading && !error ? <PlanetView planet={planet} /> : null}
      {error ? <ErrorIndicator /> : null}
    </div>
  );
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <img
        className='planet-image'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={name}
      />
      <div>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population:</span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RandomPlanet;
