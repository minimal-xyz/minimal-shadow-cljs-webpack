
ClojureScript HMR with Webpack
---

> Prototype, based on [shadow-cljs](https://github.com/thheller/shadow-cljs/wiki/ClojureScript-for-JS-Devs)

### Guide

* Development

```bash
yarn
yarn cljs
# use another terminal
yarn dev
# use another terminal
open http://localhost:8080
```

Edit `src/client/lib.cljs` to see hot replacing.

* Build

```bash
yarn cljs-once
```

Find built assets in `dist/`.

> In real-world projects, you may need to config externs to make `:advanced` mode work.

### License

MIT
