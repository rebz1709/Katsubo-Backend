const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const characters = [
  {
    name: "Yash",
    role: "Strategic puzzle solver",
    theme: "🟦",
    unlockable: false
  },
  {
    name: "Shiro",
    role: "Calm and wise support",
    theme: "⬜",
    unlockable: false
  },
  {
    name: "Rebz",
    role: "Unlockable glowing heroine",
    theme: "✨",
    unlockable: true
  }
];

app.get("/", (req, res) => {
  res.send("🎮 Yume Backend API is running!");
});

app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

