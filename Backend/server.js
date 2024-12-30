const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const registrationRoutes = require("./routes/registrationApi");
const userInfoRoutes = require("./routes/userInforoute");
const financialInfoRoutes = require("./routes/financialInforoute");
const viewFinancialInfoRoutes = require("./routes/viewfinancialInforoute");
const viewUserInfo = require("./routes/viewuserinforoute");

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Use Routes
app.use("/api/userinfo", userInfoRoutes);
app.use("/api/financialinfo", financialInfoRoutes);
app.use("/api", registrationRoutes);
app.use("/api/view", viewFinancialInfoRoutes);

//global error handling middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
