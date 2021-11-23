import React from 'react';
import { useItemDetails } from '../../hooks/useItemDetails';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner/Spinner';

import './persone-details.css';

function ItemDetails({ selectedId, getData }) {
  const itemDetails = useItemDetails(selectedId, getData);
  const { item, loading, error } = itemDetails;

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (!item) {
    return (
      <span style={{ marginTop: '1rem', display: 'block', color: 'white' }}>
        Please select a Persone...
      </span>
    );
  }

  const { id, name, gender, birthYear, eyeColor } = item;

  return (
    <div className='person-details card'>
      <img
        className='person-image'
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />

      <div className='card-body'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender</span>
            <span>{gender}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ItemDetails;
