import { useEffect, useState } from "react";

const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://projectyquebec.azurewebsites.net/api/v1/Product/all"
        );
        const data = await response.json();
        setGames(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, isLoading, isError };
};

export default useFetchGames;
