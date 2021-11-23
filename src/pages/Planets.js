import React, { useState } from 'react';

import ItemList from '../components/item-list/ItemList';
import ItemDetails from '../components/item-details/ItemDetails';
import RowBlock from '../components/row-block/RowBlock';
import { getAllPlanets, getPlanet } from '../services/services';

function Planets() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const onItemSelected = (id) => {
    setSelectedPlanet(id);
  };

  return (
    <RowBlock
      left={
        <ItemList
          getData={getAllPlanets}
          renderItem={({ name }) => name}
          onItemSelected={onItemSelected}
        />
      }
      right={<ItemDetails getData={getPlanet} selectedId={selectedPlanet} />}
    />
  );
}

export default Planets;
