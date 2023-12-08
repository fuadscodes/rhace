"use client";
import React from "react";
import useGetMotorcycle from "../src/util/useGetMotorcycle";
import { Motorcycle } from "./Motorcycle";

export const Search = () => {
  const { motorcycle, loading, fetchData } = useGetMotorcycle();

  const handleOnClick = () => {
    fetchData();
  };

  return (
    <div
      id="search"
      className="bg-teal-50 text-white shadow-lg py-[64px] md:py-[120px] px-[32px] scroll-mt-[67px] flex-col min-h-[600px]"
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
        <Motorcycle data={motorcycle} />
      </div>
    </div>
  );
};
