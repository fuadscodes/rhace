"use client";
import React from "react";
import { MotorcycleProps } from "./MotorcycleProps";

export const Motorcycle: React.FC<MotorcycleProps> = ({ data }) => {
  if (!data) return null;

  const originalKeys: string[] = Object.keys(data);
  const mappedKeys: string[] = originalKeys.map((key) =>
    key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  );

  return (
    <div className="flex flex-col items-start md:items-center">
      {originalKeys.map((originalKey, index) => {
        const mappedKey = mappedKeys[index];
        return (
          <div key={index} className="mb-4 text-[16px]">
            <div className="mb-1">
              <span className="font-bold">{mappedKey}: </span>
              <span className="font-light">
                {data[originalKey as keyof typeof data]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
