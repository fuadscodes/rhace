"use client";
import { useState } from "react";
import { MOTORCYCLE_API } from "@/constants";
import { MotorcycleProps } from "../types/MotorcycleProps";

interface UseGetMotorcycleResult {
  motorcycle: MotorcycleProps | null;
  loading: boolean;
  fetchData: () => Promise<void>;
}

const useGetMotorcycle = (): UseGetMotorcycleResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [motorcycle, setMotorcycle] = useState<MotorcycleProps | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    const url = `${MOTORCYCLE_API}?make=kawasaki&model=ninja`;
    const headers = {
      "X-API-Key": process.env.NEXT_PUBLIC_API_NINJAS_KEY,
    };

    const options = {
      method: "GET" as const,
      headers: headers as Record<string, string>,
    };

    try {
      const res = await fetch(url, options);
      const data: MotorcycleProps[] = await res.json();
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
