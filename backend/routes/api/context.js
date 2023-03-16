const express = require("express");
const { validate, verifyJWT } = require("../../middlewares");
const ContextController = require('../../controllers/contextController')

const router = express.Router();

router.post('/',verifyJWT,validate('createContext'),ContextController.createContext);
router.get('/:id',verifyJWT,ContextController.getContext);
router.get('/',verifyJWT,ContextController.getContexts);
router.put('/:id',verifyJWT,validate('createContext'),ContextController.updateContext);
router.delete('/:id',verifyJWT,ContextController.deleteContext);

module.exports = router;
