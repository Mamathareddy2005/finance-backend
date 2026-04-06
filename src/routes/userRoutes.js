const express = require("express");
const { getUsers, updateUser } = require("./controllers/userController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", auth, role("admin"), getUsers);
router.put("/:id", auth, role("admin"), updateUser);

module.exports = router;