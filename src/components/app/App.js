import React, { useState } from 'react';
import People from '../../pages/People';
import Planets from '../../pages/Planets';
import Starships from '../../pages/Starships';
import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';

function App() {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);

  const toggleRandomPlanet = () => {
    setShowRandomPlanet((prevState) => !prevState);
  };

  return (
    <>
      <div className='app container'>
        <Header />
        {showRandomPlanet ? <RandomPlanet /> : null}

        <button
          className='toggle-planet btn btn-warning btn-lg'
          onClick={toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <People />
        <Planets />
        <Starships />
      </div>
    </>
  );
}

export default App;
