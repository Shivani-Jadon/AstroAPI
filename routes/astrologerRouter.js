const express = require("express");
const router = express.Router();

const astrologerController = require("../controller/astrologerController");

router.post("/add" , astrologerController.addAstrologer);

router.get("/getData" , astrologerController.fetchAstrologers);

router.put("/update/astrologerData", astrologerController.updateAstrologer);

router.delete("/delete", astrologerController.removeAstrologer);

module.exports = router;