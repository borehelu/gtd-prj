const express = require('express');
const { createItem, getItem, getItems, updateItem, deleteItem } = require('../../controllers/inboxController');
const verifyJWT = require('../../middlewares/authenticate');


const router = express.Router();


router.post('/',verifyJWT,createItem);
router.get('/:id',verifyJWT,getItem);
router.get('/',verifyJWT,getItems);
router.put('/:id',verifyJWT,updateItem);
router.delete('/:id',verifyJWT,deleteItem);

module.exports = router;