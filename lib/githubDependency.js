// const readline = require("readline");
var prompt = require("prompt");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

module.exports = {
  getDependency: () => {
    const dependency = {
      properties: {
        username: {
          description: "Enter your GitHub username ",
          type: "string",
          pattern: /^[a-z0-9_-]{3,15}$/,
          message: "Username is not valid",
          require: true
        },
        password: {
          description: "Enter your password",
          type: "string",
          hidden: true,
          require: true,
          replace: "*"
        }
      }
    };

    prompt.start();
    prompt.get(dependency, (err, result) => {
      if (err) {
        console.log(error);
      } else {
        const message =
          "{ username: '" + result.username + "' ,password: secret }";
        console.log(message);
      }
    });
  }
};
