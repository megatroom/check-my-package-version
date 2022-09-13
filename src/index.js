const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const command = require("./command");

let libPackage;
try {
  libPackage = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../package.json"))
  );
} catch (err) {
  libPackage = {
    name: "check-my-package-version",
  };
}

const program = new Command();

program
  .version(libPackage.version)
  .name(libPackage.name)
  .requiredOption("-o, --org <name>", "organization name")
  .requiredOption("-p, --project <name>", "project name")
  .option("-f, --file <path>", "package.json file path", "package.json")
  .option("-b, --branch <name>", "branch name", "main");

program.parse();

command.checkVersion(program.opts());
