let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById('numeroUsuario').value);
    

    if(numeroSecreto === numeroDelUsuario){
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${ (intentos ==  1) ? 'vez' : 'veces' }` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto > numeroDelUsuario){
             asignarTextoElemento('p','El número secreto es mayor');
        } else{
            asignarTextoElemento('p','El número secreto es menor');
            
        }   
    intentos++;
    LimpiarCaja();
    }
    return;

}

function LimpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';
}



function numeroRandom(){
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo+1));

    if(numerosSorteados == numeroMaximo){

        asignarTextoElemento('p','Haz alcanzado el número máximo de intentos');

    }else{

        
        //ver si el numero generado se encuentra en el array

        if(numerosSorteados.includes(numeroGenerado) )
        {
         return numeroRandom();
        }
        else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    } 
}



function CondicionesIniciales(){

    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indique un número entre el 1 y el ${numeroMaximo}`); 
    numeroSecreto = numeroRandom();   
    intentos = 1
}

function ReiniciarJuego(){

    //CREAR NUEVO NUMERO ALEATORIO / MENSAJE INICIAL INGRESE NÚMERO
    CondicionesIniciales();
    //LIMPIAR CAJA
    LimpiarCaja();
    //DESABILITAR BOTON 'NUEVO JUEVO'
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

CondicionesIniciales();
