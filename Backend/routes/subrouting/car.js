const express = require("express");

const router = express.Router();

module.exports = (params) => {
  router.get("/", (req, res) => {
    res.render("index", {
      page: "cars/carsForSale",
    });
  });

  return router;
};
