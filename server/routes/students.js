const express = require('express');
const router = express.Router();
const studentController = require("../controllers/studentController");

//View All Records
router.get('/',studentController.view);

//Add new records
router.get('/addUser',studentController.addUser);
router.post('/addUser',studentController.save);

//Update Records
router.get('/editUser/:id',studentController.editUser);
router.post('/editUser/:id',studentController.edit);

//Delete Records
router.get('/deleteUser/:id',studentController.delete);

module.exports = router;