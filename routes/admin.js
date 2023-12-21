const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get("/", userController.showUser);
router.post("/submit-details", userController.addUser);
router.get("/edit-user/:userId", userController.editUser);
router.post("/update-details", userController.updateDetails);
router.get("/delete-user/:userId", userController.deleteUser);

module.exports = router;