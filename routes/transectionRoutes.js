const express = require('express');
const { addTransection, getAllTransection, editTransection, deleteTransection } = require('../controllers/transectionController');

/* 
    Router Object
*/
const router = express.Router();

/* 
    Routes
*/
/* 
    Add Transection POST Method
*/
router.post('/add-transection', addTransection);

/* 
    Edit Transection POST Method
*/
router.post('/edit-transection', editTransection);

/* 
    Delete Transection POST Method
*/
router.post('/delete-transection', deleteTransection);

/* 
    Get Transection
*/
router.post('/get-transection', getAllTransection);

module.exports = router;