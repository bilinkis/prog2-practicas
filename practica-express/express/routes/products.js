const express = require('express');
const router = express.Router();
let autos = require('../../../practica-modulos/pruebaNPM/autos');
let controller = require('../controllers/productControllers');
var result = [];
router.get('/', function (req, res) {
    res.send(controller.index());

});


router.get('/marca/:marca', function (req, res) {
    let marca = req.params.marca;
    res.send(controller.marca(marca));
});
router.get('/color/:color', function (req, res) {
    let color = req.params.color;
    res.send(controller.color(color));


});
router.get('/model/:model/:year?', function (req, res) {
    
    res.send(controller.modelYear(req.params.model,req.params.year));
        });
        router.get('/year/:year', function (req, res) {
            let year = req.params.year;
            res.send(controller.year(year));
        });

        module.exports = router;
