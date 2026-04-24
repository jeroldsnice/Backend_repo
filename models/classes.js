const db = require("../db");

// Create a model from the schema
const Classes = db.model("Classes", {
   title:       { type: String, required: true },
   teacher:     { type: String, required: true },
   subject:     { type: String, required: true }
});

module.exports = Classes;