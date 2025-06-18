const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ Express server is working!");
});

app.listen(4000, () => {
  console.log("Test server running at http://localhost:4000");
});
