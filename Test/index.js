import express from "express";
import superheroes from "superheroes";

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let name = superheroes.random();
  res.render("index.ejs", { superheroName: name });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
