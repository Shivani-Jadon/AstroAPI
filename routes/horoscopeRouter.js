const express = require("express");
const router = express.Router();

const horoscopeController = require("../controller/horoscopeController");

router.post("/save", horoscopeController.createHoroscope);

router.get("/fetch", horoscopeController.fetchHoroscope);

router.put("/update", horoscopeController.updateHoroscope);

module.exports = router;