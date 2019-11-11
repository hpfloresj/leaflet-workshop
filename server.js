var express = require('express');
var serveStatic = require('serve-static');
var open = require('opn');

var staticBasePath = './';
 
var app = express();

const PORT = 5000;
 
app.use(serveStatic(staticBasePath, { 'index': ['index.html'] }));
app.listen(PORT, function() {
  console.log(`listening on ${PORT}`)
});

// Open browser
(async () => {
	  await open('http://localhost:' + PORT);
})();	

