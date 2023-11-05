console.log("Conectado");


//function validationString () {}



let checked = 0;

while (checked === 0) {
    let cantDias = prompt ("Ingrese la cantidad de días que deseas hospedarte");

    if (cantDias === ""){
        alert ("No ingresaste la cantidad de días que deseas hospedarte");
    }
    else if ( parseInt (cantDias) != cantDias) {
        alert ("Ingresa un número válido");
    }
    else if ( cantDias < 1) {
        alert ("El número de días no puede ser menor a 1");
    }
    else {  
        alert ("Bien, continuemos");
        console.log (cantDias); 
        checked = 1;
    } 
}  

checked = 0;

let cantPersonas = parseInt (prompt ("Para cuántas personas quieres hacer la reserva?"));

while (checked === 0) {
    let cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");

    if (cantPersonas === ""){
        alert ("No ingresaste la cantidad de personas que desean hospedarse");
    }
    else if ( parseInt (cantPersonas) != cantPersonas) {
        alert ("Ingresa un número válido");
    }
    else if ( cantPersonas < 1) {
        alert ("La cantidad de personas que desean hospedarse no puede ser menor a 1");
    }
    else {
        alert ("Bien, continuemos");
        console.log (cantPersonas); 
        checked = 1;
    } 
}  



while (checked === 0) {
    let nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");
    if (nombre1 === ""){
        alert ("No ingresaste tu nombre y apellido");
        //nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");
    }
    else if (/^[0-9]+$/.test(nombre1) === true) {
        alert ("Ingresa un nombre y apellido válido sin números");
        //nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");
    }
    else {
        alert ("Nombre y apellido registrado");
        console.log (nombre1); 
        checked = 1;
    }   
}

checked = 0;

for (i=1 ; i <= cantPersonas; i++) {
    while (checked === 0) {
        let nombre2 = prompt ("Ingrese el nombre y apellido del/la siguiente huésped");

        if (nombre2 === ""){
            alert ("No ingresaste tu nombre y apellido");
        }
        else if (/^[0-9]+$/.test(nombre2) === true) {
            alert ("Ingresa un nombre y apellido válido sin números");
        }
        else {
            alert ("Nombre y apellido registrado");
            console.log (nombre2); 
            checked = 1;
        } 
    }      
}
        

checked = 0;

while (checked === 0) {
    let email = prompt ("Por último, ingresa tu email. Te contactaremos con toda la información para completar el pago y asegurar tu reserva");

    if (email === ""){
        alert ("No ingresaste tu email");
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