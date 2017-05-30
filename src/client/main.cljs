
(ns client.main
  (:require [client.lib :as lib]
            [hsl.core :as hsl-core]))

(def npm-hsl (js/require "hsl"))

; for requiring npm package
; https://github.com/thheller/shadow-cljs/issues/10#issuecomment-302373576

(println "Loading main.cljs")

(defn render! []
  (println lib/lib-data)
  (println "Trying jar" (hsl-core/hsl 10 20 30 0.3))
  (println "Trying npm" (npm-hsl 10 20 30 0.3))
  (set! js/document.body.innerHTML lib/lib-data))

(defn init []
  (println "init"))

(defn start []
  (println "start")
  (render!)
  {::app true})

(defn stop [app]
  (prn [:stop app]))