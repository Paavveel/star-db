import React, { useState, useEffect } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner/Spinner';
import './item-list.css';

function ItemList({ getData, renderItem, onItemSelected }) {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getData()
      .then((item) => {
        if (!cancelled) {
          setItems(item);
        }
      })
      .catch(() => {
        setError(true);
      });

    return () => (cancelled = true);
  }, [getData]);

  if (error) {
    return <ErrorIndicator />;
  }

  if (!items) {
    return <Spinner />;
  }

  return (
    <ul className='item-list list-group'>
      {items.map((item) => {
        const { id } = item;

        return (
          <li
            key={id}
            className='list-group-item'
            onClick={() => onItemSelected(id)}
          >
            {renderItem(item)}
          </li>
        );
      })}
    </ul>
  );
}

export default ItemList;
