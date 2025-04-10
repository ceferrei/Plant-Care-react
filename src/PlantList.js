"use client";
import { Plant } from "./Plant";

export function PlantList({
  plant,
  onPlantSelection,
  onWaterPlant,
  selectedPlant,
}) {
  return (
    <div>
      <ul>
        {plant.map((plant) => (
          <Plant
            key={plant.id}
            plant={plant}
            onPlantSelection={onPlantSelection}
            onWaterPlant={onWaterPlant}
            selectedPlant={selectedPlant}
          />
        ))}
      </ul>
    </div>
  );
}
