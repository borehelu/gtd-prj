const express = require('express');
const { createItem, getItem, getItems, updateItem, deleteItem } = require('../../controllers/tasksController');
const verifyJWT = require('../../middlewares/authenticate');
const {validateProject,projectValidationResult} = require('../../validation/validateProject')


const router = express.Router();


router.post('/',verifyJWT,validateProject,projectValidationResult,createItem);
router.get('/:id',verifyJWT,getItem);
router.get('/',verifyJWT,getItems);
router.put('/:id',verifyJWT,validateProject,projectValidationResult,updateItem);
router.delete('/:id',verifyJWT,deleteItem);

module.exports = router;