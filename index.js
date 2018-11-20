'use strict';
const port=5000;

let koa     = require('koa'),
    send    = require('koa-send'),
    router  = require('koa-router')(),
    serve   = require('koa-static');

let app = new koa();
// serve files in public folder (css, js etc)
app.use(serve(__dirname + '/public'));

// rest endpoints
router.get('/api/whatever', function *(){
  this.body = 'hi from get';
});
router.post('/api/whatever', function *(){
  this.body = 'hi from post'
});

app.use(router.routes());

// this last middleware catches any request that isn't handled by
// koa-static or koa-router, ie your index.html in your example
app.use(function* index() {
  yield send(this, __dirname + '/index.html');
});

app.listen(port);
console.log(`listening on port: ${port}`); 