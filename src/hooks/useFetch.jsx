import React, { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Alguma coisa deu errado...");
          }
          return res.json();
        })
        .then((data) => {
          setData(data.rows);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch Aborted");
          } else {
            setLoading(false);
            setError(err.message);
          }
        });
    }, 1000);
  }, [url]);
 
  return { data, loading, error };
}
