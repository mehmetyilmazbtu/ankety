const db = require("../models");
const Ankety = db.anketys;

// Create and Save a new Ankety
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Ankety
  const ankety = new Ankety({
    title: req.body.title,
    description: req.body.description,
    voted: req.body.voted
  });

  // Save Ankety in the database
  ankety
    .save(ankety)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ankety."
      });
    });
};

// Retrieve all Anketys from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Ankety.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Anketys."
      });
    });
};

// Find a single Ankety with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Ankety.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Ankety with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Ankety with id=" + id });
    });
};

// Update a Ankety by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Ankety.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update ankety with id=${id}. Maybe ankety was not found!`
        });
      } else res.send({ message: "ankety was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ankety with id=" + id
      });
    });
};

// Delete a ankety with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Ankety.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ankety with id=${id}. Maybe ankety was not found!`
        });
      } else {
        res.send({
          message: "ankety was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ankety with id=" + id
      });
    });
};

// Delete all anketys from the database.
exports.deleteAll = (req, res) => {
  Ankety.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} anketys were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all anketys."
      });
    });
};

// Find all published anketys
exports.findAllPublished = (req, res) => {
  Ankety.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving anketys."
      });
    });
};
