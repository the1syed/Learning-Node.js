const path = require("path");
const root = require("../utils/paths");
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(root, "views", "add-home.html"));
};

exports.postAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  const { houseName, pricePerNight, location, rating, image } = req.body;
  const home = new Home(houseName, pricePerNight, location, rating, image);
  home.save();
  console.log(req.body);
  res.sendFile(path.join(root, "views", "homeadded.html"));
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((hoems) => {
    res.render("home", { homes: homes, pageTitle: "AirBnB Homes" });
  });
};
