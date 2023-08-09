# Dezgo Node.js example

This minimal example demonstrates how to use the Dezgo API with NodeJS.

You can take inspiration from the Dockerfile to install the proper dependencies.

The following scripts demonstrate how to call various endpoints:

- `txt2img.js`
- `img2img.js`
- `inpaint.js` 
- `inpaint_text.js`

Finally, if you have Docker, you can invoke the `run_test.sh` script, which will build a Docker image and invoke a test script all in one:

```
sh run_test.sh txt2img.js
sh run_test.sh img2img.js
sh run_test.sh inpaint.js
sh run_test.sh inpaint_text.js
```

---

## Authentication

Be sure to set the `X-Dezgo-Key` header to your own API key before calling the API.

More info on how to get started here: https://dev.dezgo.com/getting-started/



