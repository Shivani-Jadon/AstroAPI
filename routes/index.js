const express = require("express");
const router = express.Router();

router.use("/api/horoscope", require("./horoscopeRouter"));

router.use("/api/astrologer", require("./astrologerRouter"));

module.exports = router;