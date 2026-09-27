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
app.use(express.static(path.join(__dirname, "../../Frontend")));

app.locals.pageTitle = "Evan Vang"
app.use("/", routes());
// app.get('/', (req, res) => {
//     res.render('index');
// });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
