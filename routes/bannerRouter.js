const express = require("express");
const router = express.Router();

const bannerController = require("../controller/bannerController");

// route to add new banner schemes
router.post("/add", bannerController.addBannerScheme);

// route to fetch banner schemes
router.get("/fetch", bannerController.fetchBannerSchemes);

// route to remove banner schemes
router.delete("/delete", bannerController.removeBannerScheme);

module.exports = router;