"use client";
import { useState } from "react";
import { Button } from "./App";

export function PlantDetail({ plant, onWaterPlant, onUpdateNotes }) {
  const [notes, setNotes] = useState(plant.notes);
  const [isEditing, setIsEditing] = useState(false);
  const lastWateredDate = new Date(plant.lastWatered);
  const today = new Date();
  const diffTime = Math.abs(today - lastWateredDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  const nextWateringDate = new Date(lastWateredDate);
  nextWateringDate.setDate(nextWateringDate.getDate() + plant.waterFrequency);

  function handleSaveNotes() {
    onUpdateNotes(plant.id, notes);
    setIsEditing(false);
  }

  return (
    <div className="plant-details">
      <div className="plant-header">
        <img src={plant.image} alt={plant.name} />
        <div>
          <h2>{plant.name}</h2>
          <p className="location">{plant.location}</p>
        </div>
      </div>
      <div className="watering-info">
        <div className="info-card">
          <h3>Watering Schedule</h3>
          <p>Water every {plant.waterFrequency} days</p>
          <p>
            Last watered: {diffDays === 0 ? "Today" : `${diffDays} days ago`}
          </p>
          <p>Next watering: {formatDate(nextWateringDate)}</p>
          <div className="water-progress">
            <div
              className="progress-bar"
              style={{
                width: `${Math.min(
                  100,
                  (diffDays / plant.waterFrequency) * 100
                )}%`,
                backgroundColor:
                  diffDays >= plant.waterFrequency
                    ? "var(--color-danger)"
                    : diffDays >= plant.waterFrequency - 2
                    ? "var(--color-warning)"
                    : "var(--color-success)",
              }}
            ></div>
          </div>
          <button
            className="button water-now-btn"
            onClick={() => onWaterPlant(plant.id)}
          >
            Water Now
          </button>
        </div>
      </div>

      <div className="notes-section">
        <div className="notes-header">
          <h3> Care Notes</h3>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            className="edit-button"
          >
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>
        {isEditing ? (
          <div className="edit-notes">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <Button className="button save-btn" onClick={handleSaveNotes}>
              Save
            </Button>
          </div>
        ) : (
          <p className="notes-content">{notes || "No notes added yet."}</p>
        )}
      </div>
    </div>
  );
}
