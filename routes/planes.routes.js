const express = require('express');
const route = express.Router();
const planesController = require('../controllers/planes.controller')

route.get('/', planesController.getAllPlanes)



module.exports = route;