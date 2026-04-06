const express = require("express");
const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require("../controllers/recordController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", auth, role("admin"), createRecord);
router.get("/", auth, role("admin", "analyst"), getRecords);
router.put("/:id", auth, role("admin"), updateRecord);
router.delete("/:id", auth, role("admin"), deleteRecord);

module.exports = router;