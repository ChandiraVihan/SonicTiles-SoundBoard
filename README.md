### 🎵 SonicTiles - SoundBoard 
A dynamic React application that demonstrates state management and list rendering. This project initializes a grid of interactive "pads" using React's useState hook and maps through data to render UI components efficiently.

### 🚀 Features
Stateful Components: Uses useState to manage a local copy of data.

Dynamic Rendering: Maps over a data array to generate a grid of buttons.

Keyed Fragments: Implements unique key props for optimized React reconciliation.

Modular Code: Separates data logic (pads.js) from UI logic (App.jsx).

### 🛠️ Tech Stack
Framework: React.js

Build Tool: Vite

Styling: CSS3 (Flexbox/Grid)

### 💻 Implementation Details
In this project, I practiced initializing state from an external data file and using the .map() method to transform data objects into JSX elements.

```Bash
const [padArray, setPadArray] = useState(pads)

// Rendering logic
{padArray.map(pad => (
    <button key={pad.id} className="pad"></button>
))}
```
