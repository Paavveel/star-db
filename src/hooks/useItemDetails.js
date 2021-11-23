import { useState, useEffect } from 'react';

export const useItemDetails = (id, getData) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    setLoading(true);

    let cancelled = false;
    getData(id)
      .then((item) => {
        if (!cancelled) {
          setItem(item);
          setLoading(false);
        }
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    return () => (cancelled = true);
  }, [id, getData]);

  return {
    item,
    error,
    loading,
  };
};
