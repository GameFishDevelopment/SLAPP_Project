$(document).ready(function() {
    var socket = io.connect('http://localhost:3000'); // create connection
    socket.on('valuesReceived', function(data) {
        $('#air-quality').text(data.airQuality);
//        $('#orientation').text(data.orientation);
//        $('#vibration').text(data.vibration);
//        $('#accelerometer').text(data.accelerometer);
    });
});
