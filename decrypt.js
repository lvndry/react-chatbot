const fs = require("fs");
const secureEnv = require("secure-env");

const destFile = ".env";
const env = secureEnv({ secret: "" });

fs.writeFile(destFile, "", () => {});

Object.keys(env).forEach((key) => {
  const line = `${key}=${env[key]}\n`;
  fs.appendFile(destFile, line, () => {});
});

console.log(env);
