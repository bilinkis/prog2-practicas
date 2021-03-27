var express = require('express');
var router = express.Router();

let bandController = require('../controllers/bandController');
router.get('/', bandController.listadoBandas);
router.get('/id/:id', bandController.id);
router.get('/genre/:genre', bandController.genre);
  
  module.exports = router;
  