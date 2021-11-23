import React from 'react';

function RowBlock({ left, right }) {
  return (
    <div className='row mt-2'>
      <div className='col-md-6'>{left}</div>
      <div className='col-md-6'>{right}</div>
    </div>
  );
}

export default RowBlock;
