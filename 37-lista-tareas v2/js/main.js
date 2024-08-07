/* Uso estricto */
"use strict";

//Variable Global
var listaTareas = [];

//Array paralelo a lista tareas que almacena si la tarea esta hecha o no.

var tareasRealizadas = [];

//Variable que guarde el numero de la tarea a modificar
var numTareaMod;





//Paso 0: ¿Cuál es la interacción?
function anadirTarea() {

    //Necesito ejecutar el código cuando haga click en el botón

    console.log("estoy dentro de añadir tarea");

    //Paso 1: Obtengo los datos del formulario

    var ultimaTarea = document.getElementById("f-tarea").value;
    console.log("Ultima tarea = " + ultimaTarea);

    //Paso 2: Guardo en un array la ultima tarea de forma acomulada
    listaTareas.push(ultimaTarea);
    console.log(listaTareas);

    //Marco la tarea nueva como no realizada
    tareasRealizadas.push(false);


    //Llamo pintar tabla

    pintarTabla();





}

function pintarTabla() {

    //Paso 3: bucle que genera el codigo a pintar
    var codigoTabla = '';

    for (let i = 0; i < listaTareas.length; i++) {
        console.log("dentro del bucle " + (i + 1) + " veces");

        //Creo la clase si la tarea está hecha o no
        var claseBoton = (tareasRealizadas[i] == true) ? "success" : "secondary";

        //Acumulo el codigo de la tabla.cada vez que pasa por el bucel añade una fila(<tr>) de código 

        codigoTabla += '<tr class = "table-' + claseBoton + '">' +
            '<td>' + (i + 1) + '</td>' +
            '<td>' + listaTareas[i] + '</td>' +
            '<td style="width:70px"><button onclick="lanzarModal(' + i + ')" type= "button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil-fill"></i></button></td>' +
            '<td style="width:70px"><button onclick="borrar(' + i + ')" type= "button" class="btn btn-danger "><i class="bi bi-trash3-fill"></i></button></td>' +
            '<td style="width:70px"><button onclick="tareaHecha(' + i + ')" type= "button" class="btn btn-' + claseBoton + ' "><i class="bi bi-check-lg"></i></button></td>' +
            '</tr>';


    }




    //Paso 4: Pinto los datos en el HTML
    document.getElementById("cuerpo-tabla").innerHTML = codigoTabla;

    //Paso 5 : Borro el valor del input
    document.getElementById("f-tarea").value = "";
}

//BORRAR

function borrar(numeroElemento) {


    console.log("Estoy dentro de la funcion borrar");

    //Borro el elemento del array

    listaTareas.splice(numeroElemento, 1);

    //Borro el elemento del array tareasRealizadas
    tareasRealizadas.splice(numeroElemento, 1);



    //Lanzo la ventana de confirmación

    var confirmacion = window.confirm("Deseas eliminar la tarea numero " + (numeroElemento + 1));
    console.log("confirmacion = " + confirmacion);

    if (confirmacion == true) {

        //Pintar la tabla despues de borrar el elemento del array
        pintarTabla();
    }



}


//Marcar Tarea como hecha

function tareaHecha(numeroElemento) {

    console.log("Estoy dentro de la función tareaHecha y numeroElemento = " + numeroElemento);

    //Cambio el estado booleano del elemento tareas realizadas

    if (tareasRealizadas[numeroElemento] == true) {

        //Pongo el valor del array en false
        tareasRealizadas[numeroElemento] = false;




    } else {
        //Pongo el valor del array en false
        tareasRealizadas[numeroElemento] = true;

    }

    //Pintar la tabla despues de borrar el elemento del array
    pintarTabla();


}

//Modificar tarea

function lanzarModal(numeroElemento) {

    console.log("Estoy dentro de la función lanzarModal y numeroElemento = " + numeroElemento);

    //Mando el dato del array al valor del input para modificar

    document.getElementById("f-tarea-mod").value = listaTareas[numeroElemento];

    //Guardo el numero de la tarea a modificar

    numTareaMod = numeroElemento;

}

function modificarTarea() {

    console.log("Estoy dentro de la función modificarTarea ");



    //Modifico el elemento del array
    listaTareas.splice(numTareaMod, 1, document.getElementById("f-tarea-mod").value );

    //Pinto Tabla
    pintarTabla();






}


