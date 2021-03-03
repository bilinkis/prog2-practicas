function calcularConsumo(age,averagePerDay,product){
    let maxAge = 82;
    let years = maxAge - age;
    let days = years * 365;
    let quantity = days * averagePerDay;
    return "Necesitarás " + quantity + " de " + product + " para que dure el resto de tu vida";
}
console.log(calcularConsumo(20,1,"Cerveza"));
let arrayDeDatos = ["hola", "chau", "asd"];
function cambiarElUltimo(array, input){
    let length = array.length;
    array.pop();
    array.push(input);
    return array;
}
console.log(cambiarElUltimo(arrayDeDatos, "Dale Boca"));

let libro = {
    nombre: "Sherlock Holmes",
    genero: "Policial",
    cantidadDePalabras: "27544",
    paraAdultos: false,
    describirse: function(){ 
    console.log("El título del libro es " + libro.nombre + " y el género es " + libro.genero);
    return("El título del libro es " + libro.nombre + " y el género es " + libro.genero)
},
    puedeLeerlo: function(edad){
        if(libro.paraAdultos && edad <18){
         return false;
         console.log("No puede leerlo")
        } else {
            console.log("Puede leerlo")
            return true;
        } 
        }
    }

libro.describirse();
libro.puedeLeerlo(14);
function calcularAniosPerrunos(age){
    let humanAge = age * 7;
    return "Tu perro tiene " + humanAge + " años perrunos";
}
console.log(calcularAniosPerrunos(10));
function celsiusAFahrenheit(temp){
    let fahr = temp * 1.8 + 32;
    return temp+" grados celsius son "+fahr+ " grados fahrenheit";
}

function fahrenheitACelsius(temp){
    let celsius = (temp -32) / 1.8;
    return temp+" grados fahrenheit son "+celsius+ " grados celsius";
}
console.log(celsiusAFahrenheit(18));
console.log(fahrenheitACelsius(64.4));