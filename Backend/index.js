// Express setup.
const express = require("express");
const app = express();
const path = require("path");

// Routes for the backend to use.
const routes = require("./routes/routing");

// Set the view engine to use EJS
app.set("view engine", "ejs");

// views to use
app.set("views", path.join(__dirname, "../Frontend/layout"));
app.use(express.static(path.join(__dirname, "../Frontend")));

// To read this simply do a <%= pageTitle %> in a .ejs view.
// app.locals.pageTitle = "Evan Vang"

const params = {}
app.use("/", routes(params));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
