import React from 'react';
import People from '../../pages/People';
import Planets from '../../pages/Planets';
import Starships from '../../pages/Starships';
import { Routes, Route } from 'react-router-dom';
import Layout from '../../layout/Layout';

function App() {
  return (
    <div className='app container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='people' element={<People />} />
          <Route path='planets' element={<Planets />} />
          <Route path='starships' element={<Starships />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
