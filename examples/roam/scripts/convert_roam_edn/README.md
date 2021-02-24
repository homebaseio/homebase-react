1. Press export all in Roam
1. Select EDN and export
1. Remove `#datascript/DB` from the first line
1. Install the [Clojure CLI](https://clojure.org/guides/getting_started) if you don't already have it
1. cd to the root of this repo and run `clj scripts/convert_roam_edn/convert.clj FILE_TO_CONVERT.edn`
    - E.g. `clj scripts/convert_roam_edn/convert.clj scripts/convert_roam_edn/datasets/hn.edn`
    - This will write a converted file of the same name to `public/edn`