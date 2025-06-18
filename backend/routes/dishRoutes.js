// API endpoints (Get and Patch)

const express = require("express");
const router = express.Router();
const {
  getAllDishes,
  toggleDishStatus
} = require("../controllers/dishController");

router.get("/dishes", getAllDishes);
router.patch("/dishes/:id/toggle", toggleDishStatus);

module.exports = router;
