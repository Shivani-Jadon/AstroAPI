const express = require("express");
const router = express.Router();

router.use("/api/horoscope", require("./horoscopeRouter"));

module.exports = router;