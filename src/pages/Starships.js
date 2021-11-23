import React, { useState } from 'react';

import ItemList from '../components/item-list/ItemList';
import ItemDetails from '../components/item-details/ItemDetails';
import RowBlock from '../components/row-block/RowBlock';
import { getAllStarships, getStarship } from '../services/services';

function Starships() {
  const [selectedStarship, setSelectedStarship] = useState(null);

  const onItemSelected = (id) => {
    setSelectedStarship(id);
  };

  return (
    <RowBlock
      left={
        <ItemList
          getData={getAllStarships}
          renderItem={({ model }) => model}
          onItemSelected={onItemSelected}
        />
      }
      right={
        <ItemDetails getData={getStarship} selectedId={selectedStarship} />
      }
    />
  );
}

export default Starships;
