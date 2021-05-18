
function suma (num1, num2){
    return (num1 + num2);
}

function calc(num1, num2, cb) {
    return cb(num1, num2);
}

console.log( calc(2,6,suma) );

//-------------------------------------

function fecha(cb){
    console.log(new Date);
    setTimeout(function(){
        cb(new Date);
    },2000);
}

//este es el callback en la funcion fecha:
function printDate(fechaAhora){
    console.log(fechaAhora);
}

fecha(printDate);

//--------------------------------------

