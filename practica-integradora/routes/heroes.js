var express = require('express');
var router = express.Router();
let controller = require('../controllers/heroeController');

/* GET home page. */
router.get('/', function(req, res) {
  res.send(controller.main());
});

router.get('/detalle/:id', function(req, res) {
    res.send(controller.detalle(req.params.id));
  });

  router.get('/bio/:id/:ok?', function(req, res) {
    res.send(controller.bio(req.params.id, req.params.ok));
  });

module.exports = router;