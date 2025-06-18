// Entry point of backend app

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const dishRoutes = require("./routes/dishRoutes");
app.use("/api", dishRoutes);

// Connect DB and Start Server
mongoose.connect(process.env.MONGO_URI)

.then(() => {
  app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
})
.catch(err => console.error("MongoDB connection failed:", err));
