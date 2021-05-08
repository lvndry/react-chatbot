const fs = require("fs");
// eslint-disable-next-line import/no-extraneous-dependencies
const secureEnv = require("secure-env");

const destFile = ".env";
const env = secureEnv({ secret: "" });

fs.writeFile(destFile, "", () => {});

Object.keys(env).forEach((key) => {
  const line = `${key}=${env[key]}\n`;
  fs.appendFile(destFile, line, () => {});
});

console.log(env);
