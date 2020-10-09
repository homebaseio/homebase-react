# Put JS dialects like JSX here

ShadowCLJS needs dialects like JSX to be pre-processed before use in CLJS https://shadow-cljs.github.io/docs/UsersGuide.html#_javascript_dialects

Run babel after editing a file here and import it from the src/js_gen file when using it in CLJS.
```bash
npx babel src/js --out-dir src/js_gen
```