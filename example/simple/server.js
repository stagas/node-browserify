var connect = require('connect');
var server = connect.createServer();

server.use(connect.static(__dirname));
server.use(require('browserify')({
    require : __dirname + '/js/foo.js',
    mount : '/browserify.js',
}));

server.listen(9393);
console.log('Listening on 9393...');
