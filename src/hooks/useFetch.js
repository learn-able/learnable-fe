import { useState, useCallback, useRef, useEffect } from 'react';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        if (!response.ok) {
          throw new Error(response.message);
        }

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(
    () => () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    },
    []
  );

  return { isLoading, error, sendRequest, clearError, setError, setIsLoading };
};
