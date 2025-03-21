import { useState } from 'react';
import axios from 'axios';

export function useFetchApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (query) => {
    setLoading(true);
    setError(null);

    try {
      let url
      if (query.startsWith('https')) {
        url = query
      } else if (!isNaN(Number(query)) && Number(query) > 0) {
        url = `https://rickandmortyapi.com/api/location/${query}`
      }else {
        url = `https://rickandmortyapi.com/api/location/?name=${query}`
      }

      const res = await axios.get(url)
      setData(res.data.results ? res.data.results[0] : res.data)
    } catch (error) {
      console.error(error)
      setError(error.response?.data?.error || "Something went wrong")
    }finally {
      setLoading(false)
    }
  }

  return {data, loading, error, request}
}