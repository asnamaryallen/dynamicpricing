# Dynamic Pricing Management UI

A responsive, reactive Angular web application that parses and displays complex, nested JSON pricing data in an interactive dashboard. This project was built to demonstrate modern Angular state management, dynamic UI rendering, and clean component architecture.

## Features

* **Dynamic Data Parsing:** Fetches and processes deeply nested local JSON data (`HttpClient`).
* **Reactive State Management:** Utilizes modern Angular Signals (`signal()`) for highly efficient, immutable state updates without relying on Zone.js.
* **Interactive Accordion UI:** Categorized data (Default, Inserts, FR) is organized into expandable/collapsible sections for better user experience.
* **Live Editing:** Users can dynamically add new pricing columns or remove existing ones, with the UI reacting instantly.
* **Modern Control Flow:** Implements Angular's newest `@if` and `@for` block syntax for cleaner, faster template rendering.
* **Responsive Styling:** Clean, professional CSS with hover states, intuitive inputs, and a custom font layout.

## Tech Stack

* **Framework:** Angular (v17/v18)
* **Architecture:** Standalone Components (Zoneless Change Detection)
* **Language:** TypeScript
* **Styling & Markup:** HTML5, CSS3
