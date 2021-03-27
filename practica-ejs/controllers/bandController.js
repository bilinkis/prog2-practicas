let bands = require('../node_modules/bands/bands');
let controller = {
listadoBandas: function (req, res){

        res.render('index', { bands : bands, title: 'Página principal' });

},
id: function(req,res){
    let result;
    if(bands.lista[req.params.id] != null){
        result = bands.lista[req.params.id];
    res.render('detalleBanda', {band : result, title:"Página de ID"});
}
else{
    res.render('detalleBanda', {band : "empty", title:"Página de ID"})
}
},
genre: function(req,res){
    let result = [];
    for (let i=0;i<bands.lista.length;i++){
        if (bands.lista[i].genero == req.params.genre){
            result.push(bands.lista[i]);
        }
    }
    res.render('porGenero', {band : result, title:"Página de género"});
    
}
}
module.exports = controller;