var mosca = require('mosca');

var settings = {
	port: 1883
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client){
	console.log('client connected', client.id);
});

server.on('published', function(packet, client){
	console.log('Published', packet.payload);
});

server.on('ready', setup);

function setup(){
	console.log("Mosca server is running.");
}
