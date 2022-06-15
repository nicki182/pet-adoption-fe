import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
const customQuery = (schema, { ...config }) => {
  const { data, loading, error } = useQuery(schema, config);
  useEffect(() => {
    console.error(error);
  }, [error]);
  return { data, loading, error };
};
