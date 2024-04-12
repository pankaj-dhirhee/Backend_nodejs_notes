const express = require("express");
const router = express.Router();

const insert_document = require("../controllers/13.2_inserting-document.js");
const read_document = require("../controllers/13.3_reading-document.js");
const update_document = require("../controllers/13.4_updating-document.js");
const delete_document = require("../controllers/13.5_deleating-document.js");
const list_all_databases = require("../controllers/13.6_list-all-databases.js");

// Chapter 2. Inserting document in mongo db
router.route("/insert-document").get(insert_document);
// Chapter 3. Reading document in mongodb
router.route("/read-document").get(read_document);
// Chapter 4. Updating document in mongodb
router.route("/update-document").get(update_document);
// Chapter 5. Deleating document in mongodb
router.route("/delete-document").get(delete_document);
// chapter 6. Listing all databases using mongoose
router.route("/list-all-databases").get(list_all_databases);

module.exports = router;