import React, { useState, useEffect } from 'react';
import ItemList from '../components/item-list/ItemList';
import PersoneDetails from '../components/persone-details/PersoneDetails';
import Spinner from '../components/spinner/Spinner';
import { getAllPeople } from '../services/services';

function People() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllPeople()
      .then((people) => {
        // setPeople(people);
        // setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      {/* {loading ? <Spinner /> : null} */}
      <ItemList items={people} />
      <PersoneDetails />
    </>
  );
}

export default People;
