var express = require('express');
var serveStatic = require('serve-static');

var staticBasePath = './';
 
var app = express();
 
app.use(serveStatic(staticBasePath, { 'index': ['index.html'] }));
app.listen(5000, function() {
  console.log('listening on 5000')
});