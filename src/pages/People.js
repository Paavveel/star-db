import React, { useState } from 'react';

import ItemList from '../components/item-list/ItemList';
import ItemDetails from '../components/item-details/ItemDetails';
import RowBlock from '../components/row-block/RowBlock';
import { getAllPeople, getPerson } from '../services/services';

function People() {
  const [selectedPerson, setSelectedPersone] = useState(null);

  const onItemSelected = (id) => {
    setSelectedPersone(id);
  };

  return (
    <RowBlock
      left={<ItemList getData={getAllPeople} onItemSelected={onItemSelected} />}
      right={<ItemDetails getData={getPerson} selectedId={selectedPerson} />}
    />
  );
}

export default People;
