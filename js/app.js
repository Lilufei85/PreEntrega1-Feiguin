

const reservas = [];


class Reserva {
    constructor (nroReserva, cantDias, cantHuespedes, huespedes, email) {
        this.nroReserva = nroReserva;
        this.cantDias = cantDias;
        this.cantHuespedes = cantHuespedes;
        this.huespedes = huespedes;
        this.email = email;
        this.mensaje = function () {
            console.log (`Reserva nro ${nroReserva} confirmada. Por ${cantDias} días para ${cantHuespedes} personas.`)
        }
    }
}

//const nuevaReserva = new Reserva;
//nuevaReserva.huespedes = [];


const simuladorBtn = document.getElementById("reservarViaTransfe");

simuladorBtn.addEventListener("click", function() {
    let iDias;
    let iHuespedes;


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
                return cantDias; 
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
                //nuevaReserva.cantHuespedes = iHuespedes;
                return cantPersonas; //iHuespedes;
            } 
        }  
    }

    
    /* function validateHuesped1 (){
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
                nuevaReserva.huespedes.push (nombre1);
                return nombre1;
                checked = 1;
                
            } 
            
        }
    } */


    function validateHuespedes () {
        let huespedes = [];
        for (i=0 ; i < iHuespedes; i++) {
            let nombre2 = prompt (`Ingrese el nombre y apellido del/la huésped número ${parseInt(i+1)}`);
            checked = 0;
            while (checked === 0) {
                if (nombre2 === ""){
                    alert ("No ingresaste el nombre y apellido");
                    nombre2 = prompt (`Ingrese el nombre y apellido del/la huésped número ${parseInt(i+1)}`);
                }
                else if (/^[0-9]+$/.test(nombre2) === true) {
                    alert ("Ingresa un nombre y apellido válido sin números");
                    nombre2 = prompt (`Ingrese el nombre y apellido del/la huésped número ${parseInt(i+1)}`);
                }
                else {
                    huespedes.push (nombre2);
                    alert ("Nombre y apellido registrado");
                    checked = 1;
                } 
            }                 
        }
        return (huespedes);
    }


    function validateEmail (){
        const validateEmail = function (email) {
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    
        checked = 0;
        email = prompt ("Por último, ingresa tu email. Te contactaremos con toda la información para completar el pago y asegurar tu reserva");
    
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
                //nuevaReserva.email = email;
                
                alert (`Quedó registrada tu consulta por una estadía de ${iDias} días para ${iHuespedes} personas. A la brevedad, te enviaremos toda la información por email. Gracias!`);
                checked = 1;
                return email;
            } 
        }   
    }
    
    
    function generarNumeroReserva () {
        return ( Math.ceil (Math.random () * 9999 + 1));
    }
    
    function uploadReserva () {
        reservas.push (new Reserva(
            generarNumeroReserva(),
            validateCantDias(),
            validateCantHuesped(),
            //validateHuesped1 (),
            validateHuespedes(),
            validateEmail()
        ));
    }
    
    uploadReserva ();
});




const simuladorBtn2 = document.getElementById("buscarReserva");

simuladorBtn2.addEventListener("click", function() {
    let busqueda = prompt ("A nombre de quién está la reserva que buscás?");
        const BusquedaReserva = reservas.filter ( (el) => el.huespedes.includes (busqueda));
        // AYUDAAAA const BusquedaReserva = reservas.filter ( (el) => (el.huespedes.toLowerCase()).includes ( busqueda.toLowerCase() ));
        console.log (BusquedaReserva);
    
    if (BusquedaReserva.length === 0) {
    alert(`No se encontró ninguna búsqueda bajo el nombre ${busqueda}` );
    } else {
        console.log(`Se encontraron las siguientes reservas bajo el nombre ${busqueda}:`);
        BusquedaReserva.map((el) => {
            alert ("Mira tu/s reserva/s en la consola")
            console.log(`Detalles de la reserva: 
                Número de reserva: ${el.nroReserva}, 
                Cantidad de días: ${el.cantDias}, 
                Cantidad de huéspedes: ${el.cantHuespedes}, 
                Huéspedes: ${el.huespedes.join(', ')} 
                Email: ${el.email}
                `);
            });
        }
    });   

