let autos = {
    list: [
        vento={
            marca: 'Volkswagen',
            modelo: 'Vento',
            year: '2020',
            color: 'negro',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
        gol={
            marca: 'Volkswagen',
            modelo: 'Gol',
            year: '2017',
            color: 'blanco',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
        sharan={
            marca: 'Volkswagen',
            modelo: 'Sharan',
            year: '2013',
            color: 'negro',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
        doscientosocho={
            marca: 'Peugeot',
            modelo: '208',
            year: '2021',
            color: 'amarillo',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
        trescientosocho={
            marca: 'Peugeot',
            modelo: '308',
            year: '2019',
            color: 'rojo',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
        cincomilocho={
            marca: 'Peugeot',
            modelo: '5008',
            year: '2021',
            color: 'negro',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
        DS7={
            marca: 'DS',
            modelo: 'DS7 Crossback',
            year: '2020',
            color: 'negro',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
        DS3={
            marca: 'DS',
            modelo: 'DS3 Crossback',
            year: '2020',
            color: 'negro',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
        DS4={
            marca: 'DS',
            modelo: 'DS4',
            year: '2020',
            color: 'negro',
            describirse: function(){
                console.log("La marca es "+this.marca+", el modelo es "+this.modelo + ", el año es "+this.year+" y el color del auto es "+this.color)
            }
        },
    ],
    porColor: function(color){
        let resultado = [];
        let length = autos.list.length;
        for(let i= 0;i<length; i++){
            if(autos.list[i].color == color){
                resultado.push(autos.list[i]);
            }
        }
        if(resultado.length>0){
            console.log(resultado);
        }
        else{
            console.log("No se encontraron datos")
        }
    },
    porMarca:function(marca){
        let resultado = [];
        let length = autos.list.length;
        for(let i = 0; i < length; i++){
            if(autos.list[i].marca == marca)
            {
                resultado.push(autos.list[i]);
            }
        }
        if(resultado.length>0){
            console.log(resultado);
        }
        else{
            console.log("No se encontraron datos")
        }
        
    },
    porYear:function(year){
        let resultado = [];
        let length = autos.list.length;
        for(let i = 0; i < length; i++){
            if(autos.list[i].year == year)
            {
                resultado.push(autos.list[i]);
            }
        }
        if(resultado.length>0){
            console.log(resultado);
        }
        else{
            console.log("No se encontraron datos")
        }
    }
}
module.exports = autos;