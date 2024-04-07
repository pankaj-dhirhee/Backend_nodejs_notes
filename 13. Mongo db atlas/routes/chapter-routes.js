const express = require("express");
const router = express.Router();
const insert_document = require("../controllers/insert-document.js")

router.route("/insert_document").get(insert_document);
module.exports = router;