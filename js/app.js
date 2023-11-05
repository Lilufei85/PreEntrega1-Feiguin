console.log("Conectado");


//const mostrarAlert = (mensaje) => {return mensaje;};

function mostrarAlert (mensaje){
    alert (mensaje);
}

let checked = 0;

while (checked === 0) {
    let cantDias = prompt ("Ingrese la cantidad de días que deseas hospedarte");

    if (cantDias === ""){
        mostrarAlert ("No ingresaste la cantidad de días que deseas hospedarte");
    }
    else if ( parseInt (cantDias) != cantDias) {
        mostrarAlert ("Ingresa un número válido");
    }
    else if ( cantDias < 1) {
        mostrarAlert ("El número de días no puede ser menor a 1");
    }
    else {  
        mostrarAlert ("Bien, continuemos");
        console.log (cantDias); 
        checked = 1;
    } 
}  

checked = 0;

let cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");

while (checked === 0) {
    if (cantPersonas === ""){
        mostrarAlert ("No ingresaste la cantidad de personas que desean hospedarse");
        cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");
    }
    else if ( parseInt (cantPersonas) != cantPersonas) {
        mostrarAlert ("Ingresa un número válido");
        cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");
    }
    else if ( cantPersonas < 1) {
        mostrarAlert ("La cantidad de personas que desean hospedarse no puede ser menor a 1");
        cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");
    }
    else {
        mostrarAlert ("Bien, continuemos");
        console.log (cantPersonas); 
        checked = 1;
    } 
}  

checked = 0;
let nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");

while (checked === 0) {
    if (nombre1 === ""){
        mostrarAlert ("No ingresaste nombre y apellido");
        nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");
    }
    else if (/^[0-9]+$/.test(nombre1) === true) {
        mostrarAlert ("Ingresa un nombre y apellido válido sin números");
        nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");
    }
    else {
        mostrarAlert ("Nombre y apellido registrado");
        console.log (nombre1); 
        checked = 1;
    }   
}


for (i=1 ; i < cantPersonas; i++) {
    let nombre2 = prompt ("Ingrese el nombre y apellido del/la siguiente huésped");
    checked = 0;
    while (checked === 0) {
        if (nombre2 === ""){
            mostrarAlert ("No ingresaste el nombre y apellido");
            nombre2 = prompt ("Ingrese el nombre y apellido del/la siguiente huésped");
        }
        else if (/^[0-9]+$/.test(nombre2) === true) {
            mostrarAlert ("Ingresa un nombre y apellido válido sin números");
            nombre2 = prompt ("Ingrese el nombre y apellido del/la siguiente huésped");
        }
        else {
            mostrarAlert ("Nombre y apellido registrado");
            console.log (nombre2); 
            checked = 1;
        } 
    }      
}
        

checked = 0;
let email = prompt ("Por último, ingresa tu email. Te contactaremos con toda la información para completar el pago y asegurar tu reserva");

while (checked === 0) {

    if (email === ""){
        mostrarAlert ("No ingresaste tu email");
        email = prompt ("Ingresa tu email");
    }
    else {
        alert ("A la brevedad, te enviaremos toda la información por email. Gracias!");
        console.log (email); 
        checked = 1;
    } 
}      




/** sugerencia de Amador para probar luego
for (i=1;i<=cantPersonas;i++){
    let nombre = prompt ("Ingresa el nombre del huésped no."+i);
    while(/^[0-9]+$/.test(nombre)){
        alert('No ingresaste tu nombre y apellido');
        nombre = prompt ("Ingresa el nombre del huésped no."+i);
    }
    alert('Se registró al huesped No'+i+" :"+nombre)
} */