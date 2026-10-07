const express = require("express");

// Further routing
const contactRoute = require("./subrouting/contact");
const carsRoute = require("./subrouting/car");

const router = express.Router();

module.exports = (params) => {
  router.get("/", (req, res) => {
    res.render("index", {
      page: "home",
    });
  });

  router.use("/cars", carsRoute(params));
  router.use("/contact", contactRoute(params));

  return router;
};
