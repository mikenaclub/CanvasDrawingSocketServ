module.exports = function(io) {
    var app = require('express');
    var router = app.Router();

    io.on('connection', function(socket) {
        console.log("Test Connected!!!")
        socket.on("msg",function (msg) {
            console.log("message" + msg);
        })
        socket.on("userDrawing",function (imgbase64) {
            io.emit("updateImg",imgbase64);
            console.log("draw")
        })
    });

    return router;
}