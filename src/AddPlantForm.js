"use client";
import { useState } from "react";

export function AddPlantForm({ onAddPlant }) {
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [waterFrequency, setWaterFrequency] = useState(4);
  const [notes, setNotes] = useState("");

  function handleSubmitAdPlant(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newPlant = {
      id,
      image: `${image}?=${id}`,
      name,
      location,
      waterFrequency,
      notes,
      lastWatered: new Date().toISOString(),
    };
    onAddPlant(newPlant);
  }

  return (
    <form className="add-plant-form" onSubmit={handleSubmitAdPlant}>
      <h2>Add New Plant</h2>

      <div className="form-grid">
        <div className="form-group">
          <label>🌿 Plant Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Monstera"
            required
          />
        </div>

        <div className="form-group">
          <label>📍 Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Living Room"
            required
          />
        </div>

        <div className="form-group">
          <label>💧 Water Every (days)</label>
          <input
            type="number"
            min="1"
            max="60"
            value={waterFrequency}
            onChange={(e) => setWaterFrequency(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>🖼️ Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>📝 Care Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any special care instructions..."
        ></textarea>
      </div>

      <button className="button">Add Plant</button>
    </form>
  );
}
