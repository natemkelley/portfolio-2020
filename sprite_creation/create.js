const testFolder = "./sprite_creation/sprites";
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const querySelectorAll = require("query-selector");

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function stripSVGextras(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(testFolder + "/" + file, "utf8", function(err, contents) {
      var dom = new JSDOM(contents);
      var document = dom.window.document;
      var newid = file.substring(0, file.length - 4);
      if (document.querySelector("g")) {
        var symbol = ` <symbol id="${newid}" viewBox="0 0 157 180">`;
        symbol += document.querySelector("g").innerHTML;
        symbol += `</symbol>`;
      }
      resolve(symbol);
    });
  });
}

const start = async (files,finalname) => {
  var returnval = "";

  await asyncForEach(files, async file => {
    if (file.includes("svg")) {
      console.log(file);
      returnval += await stripSVGextras(file);
    }
  });

  await Promise.all(files.map(async (file) => {
    returnval += await stripSVGextras(file);
  }));

  await writeFile(finalname, returnval);

  console.log("Done");
};


fs.readdir(testFolder, (err, files) => {
  start(files,'nate_sprites_final');
});


async function writeFile(name, symbols) {
  var path = testFolder + "/";
  var full =
    `
    <!DOCTYPE html>
    <head>
     <title>` +
    name +
    `</title>
    </head>
    <svg style="display:none;">
    ` +
    symbols +
    `</svg> 
    </html>`;

  fs.writeFile(path + name + ".svg", full, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
