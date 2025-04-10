"use client";
import { Button } from "./App";

export function Plant({
  plant,
  onPlantSelection,
  selectedPlant,
  onWaterPlant,
}) {
  const lastWateredDate = new Date(plant.lastWatered);
  const today = new Date();
  const diffTime = Math.abs(today - lastWateredDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const needsWater = diffDays >= plant.waterFrequency;
  const soonNeedsWater =
    diffDays >= plant.waterFrequency - 2 && diffDays < plant.waterFrequency;

  const isSelected = plant.id === selectedPlant?.id;

  function handleWaterClick() {
    onWaterPlant(plant.id);
  }

  return (
    <li>
      <img src={plant.image} alt={plant.name} />
      <div>
        <h3>{plant.name}</h3>
        <p className="location">{plant.location}</p>
        {needsWater ? (
          <p className="needs-water">Needs water now!</p>
        ) : soonNeedsWater ? (
          <p className="soon-water">
            Water in {plant.waterFrequency - diffDays} days
          </p>
        ) : (
          <p className="watered">
            Watered {diffDays === 0 ? "today" : `${diffDays} days ago`}
          </p>
        )}
      </div>
      <div className="plant-buttons">
        <Button className="water-button" onClick={handleWaterClick}>
          💧
        </Button>
        <Button onClick={() => onPlantSelection(plant)} className="button">
          {isSelected ? "Close" : "Details"}
        </Button>
      </div>
    </li>
  );
}
