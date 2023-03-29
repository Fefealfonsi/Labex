import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, estadoInicial) {
  const [data, setData] = useState(estadoInicial);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false)
        setData(response.data);
      })
      .catch((erro) => {
        setIsLoading(false)
        console.log(erro);
      });
  }, [url]);

  return [data, isLoading];
}
