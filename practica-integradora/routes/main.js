var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.');
});

router.get('/creditos', function(req, res) {
  res.send('Josefina Staudenmaier, Nico Bilinkis, Bauti Abella. Aguante boca :)');
});

module.exports = router;
