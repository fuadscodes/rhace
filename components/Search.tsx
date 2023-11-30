"use client";
import React from "react";
import useGetMotorcycle from "../src/util/useGetMotorcycle";

export const Search = () => {
  const { motorcycle, loading, fetchData } = useGetMotorcycle();

  const handleOnClick = () => {
    fetchData();
  };

  return (
    <div
      id="search"
      className="bg-black-50 text-white shadow-lg py-[64px] md:py-[120px] px-[32px] scroll-mt-[67px] flex-col justify-center h-[600px]"
    >
      <h2 className="font-bold text-[24px] md:text-[32px] text-center">
        SEARCH
      </h2>

      {!motorcycle && !loading && (
        <div
          className="cursor-pointer"
          onClick={() => {
            handleOnClick();
          }}
        >
          Search
        </div>
      )}
      {loading && <div>Loading...</div>}
      <div className="w-full flex flex-col items-center justify-center"></div>
      <div>{motorcycle?.make}</div>
    </div>
  );
};
