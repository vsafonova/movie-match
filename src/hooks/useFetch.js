import { useState, useEffect } from "react";
const useFetch = (url, method, payload) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = JSON.stringify(payload);
      console.log("Stringfied payload : " + jsonData);
      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonData,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
