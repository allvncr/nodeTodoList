const express = require("express");
const app = express();
const router = require("./routes/index");

app.use("/todos", router);

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.all("*", (req, res) => {
  res.status(404).send("ressource not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
