const express = require('express');
const { authenticate } = require('../middlewares/auth');
const transaction = require('../models/Transaction')
const {addTransaction,GetTransaction,EditTransaction,DeleteTransaction} = require('../controllers/transactionController')

const router = express.Router();

router.get('/', GetTransaction);
router.post('/', addTransaction);
router.put('/:id', EditTransaction)
router.delete('/:id',DeleteTransaction)

module.exports = router;