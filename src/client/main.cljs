
(ns client.main
  (:require [client.lib :as lib]
            [hsl.core :refer [hsl]]))

(enable-console-print!)

(println "Loading main.cljs")

(def npm-hsl (js/require "hsl"))

(defn render! []
  (println lib/lib-data)
  (println "Trying jar" (hsl 10 20 30 0.3))
  (println "Trying npm" (hsl 10 20 30 0.3))
  (set! js/document.body.innerHTML lib/lib-data))

(defn main! []
  (println "Page loaded!")
  (render!))

(defn on-jsload! []
  (println "Code updated!")
  (render!))

(set! (.-onload js/window) on-jsload!)
