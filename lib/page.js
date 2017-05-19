
var main = require('shadow-cljs/client.main');

if (module.hot) {
  module.hot.accept('shadow-cljs/client.main', function() {
    main = require('shadow-cljs/client.main');
    main.on_jsload_BANG_();
  });
}