const express = require('express');
const router = express.Router()
const producto = require('./producto.routes')

router.use('/api', producto)

module.exports = router