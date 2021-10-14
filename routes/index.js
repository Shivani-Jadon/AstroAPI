const express = require("express");
const router = express.Router();

// Horoscope
router.use("/api/horoscope", require("./horoscopeRouter"));

// Astrologer
router.use("/api/astrologer", require("./astrologerRouter"));

// Report
router.use("/api/report", require("./reportRouter"));

// Banner
router.use("/api/banner", require("./bannerRouter"));

// Question
router.use("/api/question", require("./questionRouter"));

module.exports = router;