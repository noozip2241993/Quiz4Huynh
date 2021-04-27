const express = require("express");

const app = express();
const path = require("path");

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started!");
});
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => { 
  //res.send ("Hello world...");
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/data", (req, res) => {
  const test = {
    title: "Test",
    items: ["one", "two", "three"]
  };
  res.render("data", { model: test });
});
