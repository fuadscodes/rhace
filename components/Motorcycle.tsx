"use client";
import React from "react";

interface MotorcycleProps {
  data: {
    make: string;
    model: string;
    year: string;
    type: string;
    displacement: string;
    engine: string;
    power: string;
    torque: string;
    compression: string;
    bore_stroke: string;
    valves_per_cylinder: string;
    fuel_system: string;
    fuel_control: string;
    ignition: string;
    lubrication: string;
    cooling: string;
    gearbox: string;
    transmission: string;
    clutch: string;
    frame: string;
    front_suspension: string;
    front_wheel_travel: string;
    rear_suspension: string;
    rear_wheel_travel: string;
    front_tire: string;
    rear_tire: string;
    front_brakes: string;
    rear_brakes: string;
    total_weight: string;
    seat_height: string;
    total_height: string;
    total_length: string;
    total_width: string;
    ground_clearance: string;
    wheelbase: string;
    fuel_capacity: string;
    starter: string;
  };
}

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
