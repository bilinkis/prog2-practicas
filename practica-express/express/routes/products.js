const express = require('express');
const router = express.Router();
let autos = require('../../../practica-modulos/pruebaNPM/autos');
var result = [];
router.get('/', function (req, res) {
    res.send(autos.list);

});


router.get('/marca/:marca', function (req, res, next) {
    let marca = req.params.marca;
    for (let i = 0; i < autos.list.length; i++) {
        if (autos.list[i].marca == marca) {
            result.push(autos.list[i]);
        }
    }
    next();
}, function (req, res) {
    if (result.length > 0) {
        res.send(result);
    } else {
        res.send('no se encontraron resultados');
    }
});
router.get('/color/:color', function (req, res, next) {
    let color = req.params.color;
    for (let i = 0; i < autos.list.length; i++) {
        if (autos.list[i].color == color) {
            result.push(autos.list[i]);
        }
    }
    next();
}, function (req, res) {
    if (result.length > 0) {
        res.send(result);
    } else {
        res.send('no se encontraron resultados');
    }
});
router.get('/model/:model/:year?', function (req, res, next) {
    
    if (! req.params.year) {
        let model = req.params.model;
        for (let i = 0; i < autos.list.length; i++) {
            if (autos.list[i].modelo == model) {
                result.push(autos.list[i]);
            }
        }
    } else {
        let model = req.params.model;
        for (let i = 0; i < autos.list.length; i++) {
            if (autos.list[i].modelo == model) {
                result.push(autos.list[i]);
            }
        }
            for (let i = 0; i < result.length; i++) {
                if (result[i].year<req.params.year){
                result.splice(i,1);
            }
        }
    }
        next();
        }, function (req, res){
            if(result.length> 0) {
                    res.send(result);
                } else {
                    res.send('no se encontraron resultados');
                }

            }
        );
        router.get('/year/:year', function (req, res, next) {
            let year = req.params.year;
            for (let i = 0; i < autos.list.length; i++) {
                if (autos.list[i].year >= year) {
                    result.push(autos.list[i]);
                }
            }
            next();
        }, function (req, res) {
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send('no se encontraron resultados');
            }
        });

        module.exports = router;
