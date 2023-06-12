module.exports = app => {
  const anketys = require("../controllers/ankety.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", anketys.create);

  // Retrieve all anketys
  router.get("/", anketys.findAll);

  // Retrieve all published anketys
  router.get("/published", anketys.findAllPublished);

  // Retrieve a single ankety with id
  router.get("/:id", anketys.findOne);

  // Update a ankety with id
  router.put("/:id", anketys.update);

  // Delete a ankety with id
  router.delete("/:id", anketys.delete);

  // Create a new ankety
  router.delete("/", anketys.deleteAll);

  app.use("/api/anketys", router);
};
