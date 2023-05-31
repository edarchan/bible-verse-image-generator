import * as React from 'react'

const { Dropzone } = require("dropzone");

let myDropzone = new Dropzone("#my-form");

myDropzone.on("addedfile", file => {
  console.log(`File added: ${file.name}`);
});