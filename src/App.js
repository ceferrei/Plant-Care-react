"use client";

import { useState } from "react";
import Modal from "./components/modal";
import { PlantDetail } from "./PlantDetail";
import { AddPlantForm } from "./AddPlantForm";
import { PlantList } from "./PlantList";

const initialPlants = [
  {
    id: "p1",
    name: "Snake Plant",
    image: "https://i.pravatar.cc/48?u=snakeplant",
    location: "Living Room",
    waterFrequency: 12, // days
    lastWatered: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    notes: "Tolerates low light and infrequent watering",
  },
  {
    id: "p2",
    name: "Monstera",
    image: "https://i.pravatar.cc/48?u=monstera",
    location: "Office",
    waterFrequency: 7, // days
    lastWatered: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
    notes: "Likes bright indirect light",
  },
  {
    id: "p3",
    name: "Peace Lily",
    image: "https://i.pravatar.cc/48?u=peacelily",
    location: "Bedroom",
    waterFrequency: 5, // days
    lastWatered: new Date().toISOString(), // today
    notes: "Droops when needs water",
  },
];

export function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default function App() {
  const [plant, setPlant] = useState(initialPlants);
  const [showAddPlant, setShowAddPlant] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  function handleShowAddPlant() {
    setShowAddPlant((show) => !show);
  }

  function handleAddPlant(newPlant) {
    setPlant((prevPlants) => [...prevPlants, newPlant]);
    setShowAddPlant(false);
  }

  function handlePlantSelection(plant) {
    setSelectedPlant((currPlant) =>
      currPlant?.id === plant.id ? null : plant
    );
  }

  function handleWaterPlant(plantId) {
    setPlant((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === plantId
          ? { ...plant, lastWatered: new Date().toISOString() }
          : plant
      )
    );

    // Update selected plant if it's the one that was watered
    if (selectedPlant?.id === plantId) {
      setSelectedPlant((current) => ({
        ...current,
        lastWatered: new Date().toISOString(),
      }));
    }
  }

  function handleUpdateNotes(plantId, notes) {
    setPlant((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === plantId ? { ...plant, notes } : plant
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h1>Plant Care</h1>
        <PlantList
          onPlantSelection={handlePlantSelection}
          plant={plant}
          selectedPlant={selectedPlant}
          onWaterPlant={handleWaterPlant}
        />
        <Button className="button" onClick={handleShowAddPlant}>
          Add Plant
        </Button>
      </div>
      {selectedPlant && (
        <PlantDetail
          plant={selectedPlant}
          onWaterPlant={handleWaterPlant}
          onUpdateNotes={handleUpdateNotes}
        />
      )}
      {showAddPlant && (
        <Modal onClose={handleShowAddPlant}>
          <AddPlantForm onAddPlant={handleAddPlant} />
        </Modal>
      )}
    </div>
  );
}
