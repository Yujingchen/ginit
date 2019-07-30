const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
var path = require("path");
var fs = require("fs");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory();
      //fs.stat or fs.statSync check if file name exist
    } catch (err) {
      return false;
    }
  }
};
