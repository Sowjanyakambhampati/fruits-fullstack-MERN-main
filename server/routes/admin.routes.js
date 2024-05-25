const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware");
const { roleValidation } = require("../middleware/roleValidation");

// Example of a protected route for admins
router.patch("/assign-role", isAuthenticated, roleValidation(["admin"]), (req, res) => {
  // Logic to assign role
});

module.exports = router;