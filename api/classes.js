const Classes = require("../models/classes");
const router = require("express").Router();

// Get list of all classess in the database
router.get("/", async function(req, res) {
   try {
      const classess = await Classes.find();
      res.json(classess);
   }
   catch (ex) {
      res.status(400).send(ex.message);
   }
});

// Add a new class to the database
router.post("/", async function(req, res) {
   try {
      const classes = new Classes(req.body);
      await classes.save();
      res.status(201).json(classes);
   }
   catch (ex) {
      res.status(400).send(ex.message);
   }
});

module.exports = router;