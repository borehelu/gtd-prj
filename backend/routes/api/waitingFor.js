const express = require("express");
const { validate, verifyJWT } = require("../../middlewares");
const WaitingFor = require('../../controllers/waitingForController');

const router = express.Router();

router.post('/',verifyJWT,validate('createWaitingFor'),WaitingFor.createWaitingFor);
router.get('/:id',verifyJWT,WaitingFor.getWaitingFor);
router.get('/',verifyJWT,WaitingFor.getWaitingFors);
router.put('/:id',verifyJWT,validate('createWaitingFor'),WaitingFor.updateWaitingFor);
router.delete('/:id',verifyJWT,WaitingFor.deleteWaitingFor);

module.exports = router;
