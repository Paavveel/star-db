import React, { useState } from 'react';

import ItemList from '../components/item-list/ItemList';
import ItemDetails, { Field } from '../components/item-details/ItemDetails';
import RowBlock from '../components/row-block/RowBlock';
import { getAllPeople, getPerson } from '../services/services';

function People() {
  const [selectedPerson, setSelectedPersone] = useState(null);

  const onItemSelected = (id) => {
    setSelectedPersone(id);
  };

  const personList = (
    <ItemList
      getData={getAllPeople}
      renderItem={({ name }) => <span>{name}</span>}
      onItemSelected={onItemSelected}
    />
  );

  const personeDetails = (
    <ItemDetails getData={getPerson} selectedId={selectedPerson}>
      <Field field='gender' label='Gender:' />
      <Field field='birthYear' label='Birth year:' />
      <Field field='eyeColor' label='Eye color:' />
    </ItemDetails>
  );

  return <RowBlock left={personList} right={personeDetails} />;
}

export default People;
