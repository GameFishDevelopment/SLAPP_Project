$(document).ready(function() {
    var socket = io.connect('localhost:3000'); // create connection
    socket.on('valuesReceived', function(data) {
        $('#air-quality').text(data.airQuality);
        $('#distance').text(data.distance + " cm");
        $('#humidity').text(data.humi + "%");
        $('#temperature').text(data.temp + " °C");
//        $('#orientation').text(data.orientation);
//        $('#vibration').text(data.vibration);
//        $('#accelerometer').text(data.accelerometer);
    });
});
