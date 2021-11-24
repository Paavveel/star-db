import React, { useState } from 'react';

import ItemList from '../components/item-list/ItemList';
import ItemDetails, { Field } from '../components/item-details/ItemDetails';
import RowBlock from '../components/row-block/RowBlock';
import { getAllPlanets, getPlanet } from '../services/services';

function Planets() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const onItemSelected = (id) => {
    setSelectedPlanet(id);
  };

  const planetList = (
    <ItemList
      getData={getAllPlanets}
      renderItem={({ name }) => <span>{name}</span>}
      onItemSelected={onItemSelected}
    />
  );

  const planetDetails = (
    <ItemDetails getData={getPlanet} selectedId={selectedPlanet}>
      <Field field='population' label='Population:' />
      <Field field='rotationPeriod' label='Rotation period:' />
      <Field field='diameter' label='Diameter:' />
    </ItemDetails>
  );

  return <RowBlock left={planetList} right={planetDetails} />;
}

export default Planets;
