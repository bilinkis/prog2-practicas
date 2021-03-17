let science = require('../data/science');

let controller = {
    main: function(){
        return (science.lista)
    },
    detalle: function(id){
        if (id < science.lista.length) {
            return ('Hola mi nombre es ' + science.lista[id].nombre + ' y mi profesión es ' + science.lista[id].profesion)
        } else {
            return('No encontramos al científico indicado. Por favor, elija otro id.')
        }
    },
    bio: function(id, ok) {
        if (science.lista[id] == null) {
            return ('No encontramos al cientifico.')
        } else {
            if (ok == 'ok') {
                return ('Mi nombre es ' + science.lista[id].nombre + ' y mi reseña es ' + science.lista[id].resenia)
            } else {
                return ('Lamento que no desees saber más de mi.')
            }
        }
    }

}



module.exports = controller;