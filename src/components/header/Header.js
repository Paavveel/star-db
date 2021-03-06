import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header d-flex'>
      <h3>
        <a href='#'>Star DB</a>
      </h3>
      <ul className='d-flex'>
        <li>
          <Link to='people'>People</Link>
        </li>
        <li>
          <Link to='planets'>Planets</Link>
        </li>
        <li>
          <Link to='starships'>Starships</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
