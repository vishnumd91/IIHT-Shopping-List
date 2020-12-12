const express = require('express');

const { getItems, addItems } = require('../controllers/items');

const router = express.Router();

router.get('/', getItems);

router.post('/', addItems);

module.exports = router;