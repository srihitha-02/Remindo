
# 📅 Remindo - Smart Task Management

Remindo is a modern, full-stack task management application designed for speed and productivity. It features a premium, Teams-inspired calendar interface optimized for both desktop and mobile devices.

## ✨ Key Features

*   **Premium Calendar UI**: A beautiful, responsive calendar with daily and weekly views.
*   **Mobile-First Design**: Optimized touch interactions, including a draggable mini-calendar strip.
*   **Voice Assistant**: Hands-free task creation using built-in speech-to-text functionality.
*   **Optimistic UI Updates**: Experience zero-latency task management—actions like creating, deleting, and completing tasks happen instantly.
*   **Smart Metadata**: Automatic parsing of task durations and locations.
*   **Cross-Platform**: Built for the web and ready for mobile via Capacitor (Android/iOS).

## 🚀 Tech Stack

*   **Frontend**: React, Vite, TailwindCSS, Framer Motion, Lucide React.
*   **Backend**: Node.js, Express, MongoDB.
*   **Mobile**: Capacitor (Native Android support).
*   **State Management**: Optimized React Hooks for high-performance rendering.

## 🛠️ Installation & Setup

### Prerequisites
*   Node.js (v18+)
*   MongoDB

### 1. Clone the repository
```bash
git clone https://github.com/srihitha-02/remindo.git
cd remindo
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file and add your MONGO_URI and JWT_SECRET
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

