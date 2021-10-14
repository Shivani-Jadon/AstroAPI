const express = require("express");
const router = express.Router();

const reportController = require("../controller/reportController");

router.post("/create", reportController.createReport);

router.get("/fetch", reportController.fetchReports);

router.put("/delete", reportController.deleteReport);

module.exports = router;