import React, { useState, useEffect } from "react";

export function useFetch(url, options) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = "https://apilivraria.herokuapp.com/livros";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUrl + url, options);
        const data = await response.json();
        setData(data.rows);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }

      setLoading(false);
    }
    fetchData();
  }, []);
  console.log(error);

  return { data, loading, error };
}
