const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/users", async (req, res) => {
  try {
    const { page = 1, results = 10 } = req.query;
    const response = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=${results}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
