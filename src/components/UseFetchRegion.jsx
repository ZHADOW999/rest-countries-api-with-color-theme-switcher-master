import { useState, useEffect } from 'react';

const UseFetchRegion = (selectedRegion) => {
  const [region, setRegion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegion = async () => {
      if (!selectedRegion) {
        setRegion([]);
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);

      try {
        console.log(`Fetching data for region: ${selectedRegion}`);
        const response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRegion(data);
      } catch (err) {
        console.error('Error fetching region data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegion();
  }, [selectedRegion]);

  return { region, loading, error };
}

export default UseFetchRegion;