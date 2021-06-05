const express = require('express');

const { getItems, addItems } = require('../controllers/items');

const router = express.Router();

router.get('/getItems', getItems);

router.post('/postItems', addItems);

module.exports = router;