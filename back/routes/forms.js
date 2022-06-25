const express = require('express');
const router = express.Router();
const {createForm} = require('../controllers/forms');
const path = require('path');

router.post('/', createForm)

module.exports = router;