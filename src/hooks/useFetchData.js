import React, { useEffect, useState } from "react";

function useFetchData({ url }) {
  //data state to store the fetched data
  const [data, setData] = useState([]);
  //loading state to show the loading
  const [loading, setLoading] = useState(true);
  //when error occurs
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
