#!/usr/bin/env node

const mdLinks = require("./lib/index.js");
const path = process.argv.slice(2);

mdLinks(path[0])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));