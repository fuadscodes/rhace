"use client";
import { useState } from "react";
import { MOTORCYCLE_API } from "@/constants";

const useGetMotorcycle = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [motorcycle, setMotorcycle] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const url = `${MOTORCYCLE_API}?make=kawasaki&model=ninja`;
    const headers = {
      "X-API-Key": process.env.NEXT_PUBLIC_API_NINJAS_KEY,
    };

    const options = {
      method: "GET",
      headers: headers,
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setMotorcycle(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { motorcycle, loading: isLoading, fetchData };
};

export default useGetMotorcycle;
