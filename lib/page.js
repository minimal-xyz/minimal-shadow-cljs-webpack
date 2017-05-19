
var main = require('shadow-cljs/client.main');

var app;

window.onload = function() {
  // init is only ever called once
  main.init();
  app = main.start();
};

if (module.hot) {
  module.hot.accept('shadow-cljs/client.main', function() {
    // stop currently running version
    main.stop(app);
    main = require('shadow-cljs/client.main');
    app = main.start();
  });
}