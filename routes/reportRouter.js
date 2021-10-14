const express = require("express");
const router = express.Router();

const reportController = require("../controller/reportController");

router.post("/create", reportController.createReport);

router.get("/fetch", reportController.fetchReports);

router.delete("/delete", reportController.deleteReport);

module.exports = router;