const express = require("express");
const router = express.Router();
const insert_document = require("../controllers/13.2_inserting-document.js");
const read_document = require("../controllers/13.3_reading-document.js");
const update_document = require("../controllers/13.4_updating-document.js");

// Chapter 2. Inserting document in mongo db
router.route("/insert-document").get(insert_document)
// Chapter 3. Reading document in mongodb
router.route("/read-document").get(read_document)
// Chapter 4. Updating document in mongodb
router.route("/update-document").get(update_document)

module.exports = router;