import React from 'react';
import { useItemDetails } from '../../hooks/useItemDetails';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner/Spinner';

import './persone-details.css';

function ItemDetails({ selectedId, getData, children }) {
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

  const { imageUrl, name, model } = item;

  return (
    <div className='person-details card'>
      <img className='person-image' src={imageUrl} alt={name} />

      <div className='card-body'>
        <h4>{name || model}</h4>
        <ul className='list-group list-group-flush'>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </div>
  );
}

export const Field = ({ item, field, label }) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default ItemDetails;
