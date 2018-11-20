 'use strict';
const Koa     = require('koa'),
     send    = require('koa-send'),
     router  = require('koa-router')(),
     serve   = require('koa-static');

let app = new Koa();
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
// app.use(function* index() {
//   yield send(this, __dirname + '/index.html');
// });

// app.listen(4000);

//const Koa = require('koa');

app.use (async ctx=> {
  ctx.body='Hello World';
});

app.listen(3000);
console.log('listening..................');

