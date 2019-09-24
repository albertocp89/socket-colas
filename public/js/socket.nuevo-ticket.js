// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

//Escuchar información del back
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

//Escuchar información del back
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

socket.on('estadoActual', function (data) {
    console.log(data);
    label.text(data.actual);
});


$('button').on('click', function(){

    socket.emit('siguienteTicket',null,function(siguienteTicket){
        label.text(siguienteTicket);
    });
    
});