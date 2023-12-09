"use client";
import React from "react";
import useGetMotorcycle from "../src/util/useGetMotorcycle";
import { Motorcycle } from "./Motorcycle";
import { MotorcycleProps } from "./MotorcycleProps";

export const Search: React.FC = () => {
  const { motorcycle, loading, fetchData } = useGetMotorcycle();

  const handleOnClick = () => {
    fetchData();
  };

  return (
    <div
      id="search"
      className="bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg py-[64px] md:py-[120px] px-[32px] scroll-mt-[72px] flex-col min-h-[600px]"
    >
      <h2 className="font-bold text-[24px] md:text-[32px] text-center mb-[40px]">
        SEARCH
      </h2>

      <div className="flex items-center justify-center">
        {!motorcycle && !loading && (
          <div
            className="cursor-pointer w-min"
            onClick={() => {
              handleOnClick();
            }}
          >
            Start
          </div>
        )}
        {loading && <div>Loading...</div>}
        {motorcycle && (
          <Motorcycle data={motorcycle as unknown as MotorcycleProps["data"]} />
        )}
      </div>
    </div>
  );
};
