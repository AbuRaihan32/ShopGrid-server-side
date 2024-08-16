const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// ! middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("shopGrid server is running");
});

app.listen(port, () => {
  console.log(`shopGrid is running in port ${port}`);
});
