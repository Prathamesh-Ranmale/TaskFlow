const express = require("express");

const app = express();
const port = 1000;

app.get("/api/test", (req, res) => {
  res.send("Working test route");
});
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
