#!/bin/sh

deno run -c tsconfig.json --allow-net --allow-write --allow-read --allow-env ./src/main.ts build demo/site.json
