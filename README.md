# 💝 Sleek Valentine's Day Template

A modern, interactive, and fully responsive Valentine's Day page template built with React, Tailwind CSS, and GSAP.

![Valentine's Day Page Preview](https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop)

## ✨ Features

- **Floating Heart Background**: A custom canvas animation for a romantic atmosphere.
- **Parallax Hero Section**: Depth-defying text and icons that move as you scroll.
- **Interactive Memory Lane**: A horizontal scroll gallery to showcase your favorite moments.
- **Relationship Timer**: Counts the days, hours, minutes, and seconds you've been together.
- **Playful Proposal**: A "Will you be my Valentine?" section where the "No" button runs away.
- **Music Player**: A non-intrusive floating button to play a romantic track.
- **Smooth Scrolling**: Implemented using `Lenis` for a premium feel.
- **Fully Responsive**: Optimized for both desktop and mobile devices.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/valentines-day-template.git
    cd valentines-day-template
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173`.

## 🛠️ Customization

Make this template your own by updating the following files:

### 1. Relationship Start Date
Open `src/App.jsx` and find the `relationshipStartDate` variable:
```javascript
// src/App.jsx
const relationshipStartDate = "2023-02-14"; // YYYY-MM-DD
```

### 2. Music
Open `src/components/MusicPlayer.jsx` and replace the `audioSrc` URL with your own audio file link (or local file in `public/` folder):
```javascript
// src/components/MusicPlayer.jsx
const audioSrc = "YOUR_AUDIO_URL_HERE"; 
```

### 3. Memory Lane Images
Open `src/components/MemoryLane.jsx` and update the `memories` array with your own images and captions:
```javascript
// src/components/MemoryLane.jsx
const memories = [
  { 
    id: 1, 
    title: "First Date", 
    desc: "Where it all began", 
    url: "YOUR_IMAGE_URL_HERE" 
  },
  // Add more memories...
];
```

## 📦 Build for Production

To create an optimized build for deployment:

```bash
npm run build
```

The output will be in the `dist` folder, ready to be deployed to Netlify, Vercel, or GitHub Pages.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for Valentine's Day.
