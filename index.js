const files = require("./lib/files.js");
// const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const readline = require("readline");
const dependency = require("./lib/githubDependency");
// clear();
// console.log(
//   chalk.yellow(figlet.textSync("Ginit", { horizontalLayout: "full" }))
// );
// dependency.getUsername();
// dependency.getPassword();
// dependency.writePassword();
// dependency.writePassword();
dependency.getDependency();
// if (files.directoryExists(".git")) {
//   console.log(chalk.red("Already a git repository!"));
//   process.exit();
// }
