var jsonServer = require('json-server')
var router = jsonServer.router('./db.json')
var server = jsonServer.create()
var db = router.db // See lowdb on GitHub for documentation if needed
var bodyParser = require('body-parser')
var uuid = require('uuid')

server.use(jsonServer.defaults())
server.use(bodyParser.json());


var page = 1;

server.get('/instagram', (req, res) => {
  var queue = db.get('instagram').value();
  var data = [];
  var max = page * 15; 
  
  for (var i = max - 15; i < max; i++) {
    data.push(queue.data[i]);
  }

  setTimeout(function() {
    res.jsonp({
      pagination: queue.pagination,
      data: data
    });
  }, 1500);
})

server.use(router);
server.listen(3000);
