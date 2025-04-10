### Plant Care App

A simple React application to manage your houseplants, track watering schedules, and store care notes. Perfect for anyone looking to organize and streamline plant maintenance.

## Demo

<div align="center">
  <video src="https://github.com/user-attachments/assets/04b23e63-81ce-4a82-aee3-f55bafdfa581" controls width="600">
    Your browser does not support the video tag.
  </video>
</div>

## Features

- **Plant List**: Displays all your plants with their watering status (needs water soon, needs water now, or recently watered).

- **Add New Plants**: Quickly add new plants by specifying the name, location, watering frequency, image, and care notes.

- **Water a Plant**: Update the last watered date at a click, letting the app recalculate the next watering schedule.

- **Plant Details**: View in-depth information, including editable care notes for each plant.

- **Automated Calculations**: The app calculates how many days have passed since the last watering and displays when the next watering is due.

## Installation

1. Clone the repository:

```plaintext
git clone https://github.com/ceferrei/Plant-Care-react.git
```

2. Navigate to the project folder:

```plaintext
cd Plant-Care-react
```

3. Install dependencies:

```plaintext
npm install
```

4. Start the application:

```plaintext
npm start
```

The app should run at [http://localhost:3000](http://localhost:3000) by default.

## Usage

- Check the sidebar to see all registered plants.

- Click Add Plant to create a new plant entry, filling out the name, location, watering frequency, image, and care notes.

- In the plant list, click Details to see a plant’s info and edit its care notes.

- Click the water drop icon (💧) or Water Now to update the last watered date, ensuring your plant stays hydrated.

## Customization

The project includes basic styling, but feel free to tweak colors, fonts, and layout in the main stylesheet or within components.

Add more form fields if you want to store additional information about each plant.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
