import { useEffect, useState } from "react";

const useAgent = () => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState();
  const [agent, setAgent] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((value) => setAgent(value.results[0]))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [agent, isLoading, hasError];
};

export { useAgent };
