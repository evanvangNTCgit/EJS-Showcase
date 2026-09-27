const express = require("express");

const router = express.Router();

module.exports = (params) => {
  router.get("/", (req, res) => {
    res.render("index", {
      page: "contact/contactform",
    });
  });

  router.get("/messages", (req, res) => {
    res.render("index", {
      page: "contact/contactMessages",
    });
  });

  return router;
};
