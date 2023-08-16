const botonNumeros =document.getElementsByName('data-number');
const botonOperaciones = document.getElementsByName('data-opera');
const botonIgual=document.getElementsByName('data-igual')[0];
const botonBorrar=document.getElementsByName('data-delete')[0];
var resultado =document.getElementById('resultado');
var operacionActual='';
var operacionAnterior='';
var operacion = undefined;


botonNumeros.forEach(function(boton){
boton.addEventListener('click',function(){
AgregarNumeros(boton.innerText);
    
    })
});

botonOperaciones.forEach(function(boton){
boton.addEventListener('click',function(){

   selectOperacion(boton.innerText);
})
});

function selectOperacion(op){
    if(operacionActual === '') return;
    if(operacionAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
};


function calcular(){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
};


botonIgual.addEventListener('click',function(){
    calcular();
    actulizarDisplay();
});

botonBorrar.addEventListener('click',function(){
    clear();
    actulizarDisplay();

});

 function AgregarNumeros(num) {
    operacionActual = operacionActual.toString() + num.toString();
    actulizarDisplay();
 };

function clear(){
    operacionActual='';
    operacionAnterior='';
    operacion=undefined;
    
};

 function actulizarDisplay() {
    resultado.value=operacionActual;
 };


 function actulizarDisplay(){
 resultado.value=operacionActual;   
 }

 clear();