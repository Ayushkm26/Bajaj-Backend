const express = require("express");
const { PORT } = require("./config/envConfig");

const bfhlRoutes = require("./routes/bfhlRoutes.js");
const healthRoutes = require("./routes/healthRoutes.js");

const app = express();

app.use(express.json());

app.use("/bfhl", bfhlRoutes);
app.use("/health", healthRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    is_success: false,
    error: "Internal Server Error"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
