let autos = require('../../../practica-modulos/pruebaNPM/autos');
let result = [];
let controller = {
    index: function (){
        return autos.list;
    }, 
    marca: function (marca){
        for (let i = 0; i < autos.list.length; i++) {
            if (autos.list[i].marca == marca) {
                result.push(autos.list[i]);
            }
        }
        if (result.length > 0) {
            return(result);
        } else {
            return 'no se encontraron resultados';
        }
    },
    color: function (color){
        for (let i = 0; i < autos.list.length; i++) {
            if (autos.list[i].color == color) {
                result.push(autos.list[i]);
            }
        }
        if (result.length > 0) {
            return(result);
        } else {
           return 'no se encontraron resultados';
        }
    },
    modelYear:function (model, year){
        if (year) {
            
            for (let i = 0; i < autos.list.length; i++) {
                if (autos.list[i].modelo == model) {
                    result.push(autos.list[i]);
                }
            }
        } else {
            
            for (let i = 0; i < autos.list.length; i++) {
                if (autos.list[i].modelo == model) {
                    result.push(autos.list[i]);
                }
            }
                for (let i = 0; i < result.length; i++) {
                    if (result[i].year<year){
                    result.splice(i,1);
                }
            }
        }
        if (result.length > 0) {
            return result;
        } else {
            return 'no se encontraron resultados';
        }
    },
    year: function(year){
        for (let i = 0; i < autos.list.length; i++) {
            if (autos.list[i].year >= year) {
                result.push(autos.list[i]);
            }
        }
        if (result.length > 0) {
            return result;
        } else {
            return 'no se encontraron resultados';
        }
    }
};
module.exports = controller;