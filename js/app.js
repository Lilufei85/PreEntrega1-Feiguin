

const simuladorBtn = document.getElementById("reserva");

simuladorBtn.addEventListener("click", function() {

    let iHuespedes;
    let iDias;

    function validateCantDias () {
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
                checked = 1;
                iDias = cantDias;
                return iDias; 
            } 
        }
    
    }

    function validateCantHuesped () {
        checked = 0;

        let cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");
    
        while (checked === 0) {
            if (cantPersonas === ""){
                alert ("No ingresaste la cantidad de personas que desean hospedarse");
                cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");
            }
            else if ( parseInt (cantPersonas) != cantPersonas) {
                alert ("Ingresa un número válido");
                cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");
            }
            else if ( cantPersonas < 1) {
                alert ("La cantidad de personas que desean hospedarse no puede ser menor a 1");
                cantPersonas = prompt ("Ingrese la cantidad de personas que desean hospedarse");
            }
            else {
                alert ("Bien, continuemos");
                checked = 1;
                iHuespedes = cantPersonas;
                return iHuespedes 
            } 
        }  
    }

    function validateHuesped1 (){
        checked = 0;
        let nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");
    
        while (checked === 0) {
            if (nombre1 === ""){
                alert ("No ingresaste nombre y apellido");
                nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");
            }
            else if (/^[0-9]+$/.test(nombre1) === true) {
                alert ("Ingresa un nombre y apellido válido sin números");
                nombre1 = prompt ("Ingresa el nombre del/ la primer huésped");
            }
            else {
                alert ("Nombre y apellido registrado");
                checked = 1;
            }   
        }
    }

    function validateHuespedes () {
        for (i=1 ; i < iHuespedes; i++) {
            let nombre2 = prompt ("Ingrese el nombre y apellido del/la siguiente huésped");
            checked = 0;
            while (checked === 0) {
                if (nombre2 === ""){
                    alert ("No ingresaste el nombre y apellido");
                    nombre2 = prompt ("Ingrese el nombre y apellido del/la siguiente huésped");
                }
                else if (/^[0-9]+$/.test(nombre2) === true) {
                    alert ("Ingresa un nombre y apellido válido sin números");
                    nombre2 = prompt ("Ingrese el nombre y apellido del/la siguiente huésped");
                }
                else {
                    alert ("Nombre y apellido registrado");
                    checked = 1;
                } 
            }      
        }
    }


    function validateEmail (){
        const validateEmail = function (email) {
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    
        checked = 0;
        let email = prompt ("Por último, ingresa tu email. Te contactaremos con toda la información para completar el pago y asegurar tu reserva");
    
        while (checked === 0) {
            if (email === ""){
                alert ("No ingresaste tu email");
                email = prompt ("Ingresa tu email");
            }
            else if (!validateEmail (email) ) {
                alert("La dirección de correo electrónico no es válida.");
                email = prompt ("Ingresa tu email");        
            }
            else {
                alert ("Quedó registrada tu consulta por una estadía de " + iDias + " días para " + iHuespedes + " personas. A la brevedad, te enviaremos toda la información por email. Gracias!");
                checked = 1;
            } 
        }   
    }
    
    
    validateCantDias ();
    validateCantHuesped ();
    validateHuesped1 ();
    validateHuespedes ();
    validateEmail ();

});