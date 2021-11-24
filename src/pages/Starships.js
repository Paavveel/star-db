import React, { useState } from 'react';

import ItemList from '../components/item-list/ItemList';
import ItemDetails, { Field } from '../components/item-details/ItemDetails';
import RowBlock from '../components/row-block/RowBlock';
import { getAllStarships, getStarship } from '../services/services';

function Starships() {
  const [selectedStarship, setSelectedStarship] = useState(null);

  const onItemSelected = (id) => {
    setSelectedStarship(id);
  };

  const starshipsList = (
    <ItemList
      getData={getAllStarships}
      renderItem={({ model }) => <span>{model}</span>}
      onItemSelected={onItemSelected}
    />
  );

  const starshipDetails = (
    <ItemDetails getData={getStarship} selectedId={selectedStarship}>
      <Field field='manufacturer' label='Manufacturer:' />
      <Field field='costInCredits' label='Cost In Credits:' />
      <Field field='length' label='Length:' />
      <Field field='crew' label='Crew:' />
      <Field field='passengers' label='Passengers:' />
      <Field field='cargoCapacity' label='Cargo capacity:' />
    </ItemDetails>
  );

  return <RowBlock left={starshipsList} right={starshipDetails} />;
}

export default Starships;
