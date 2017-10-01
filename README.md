
ClojureScript HMR with Webpack based on [shadow-cljs](https://github.com/thheller/shadow-cljs/wiki/ClojureScript-for-JS-Devs)
---

> It's also possible to do HMR with shadow-cljs alone, but using Webpack for more features.

### Guide

* Development

```bash
yarn
yarn shadow-cljs watch app

# use another terminal
yarn dev # start webpack-dev-server

# use another terminal
open http://localhost:8080
```

Edit `src/app/lib.cljs` to see hot replacing.

* Build

```bash
yarn build
```

Find built assets in `dist/`.

> In real-world projects, you may need to config externs to make `:advanced` mode work.

### License

MIT
