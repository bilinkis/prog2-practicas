const popularMovieQuotes = require("popular-movie-quotes");
const autos = require('./autos/index');
console.log(autos);
for(let i = 0; i < 3; i++){
console.log(popularMovieQuotes.getRandomQuote());
}
let length = autos.list.length;
for(let i = 0; i < length; i++){
    autos.list[i].describirse();
}
autos.porColor("rojo");
autos.porMarca("DS");
autos.porYear("2010");