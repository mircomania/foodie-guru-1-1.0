const express = require('express');
const router = express.Router();

const { handleSubmit } = require('../controllers/submitController');

// POST /api/submit
router.post('/submit', handleSubmit);

module.exports = router;
