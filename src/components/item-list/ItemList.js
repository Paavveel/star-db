import React from 'react';
import './item-list.css';

function ItemList({ items }) {
  return (
    <div className='col-md-6'>
      <ul className='item-list list-group'>
        {items.map((item) => {
          return (
            <li key={item.id} className='list-group-item'>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemList;
