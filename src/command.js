const https = require("https");
const fs = require("fs");

function throwProcessError(message) {
  console.error("\nError: " + message + "\n");
  process.exit(1);
}

function getVersionURL({ org, project, branch, file }) {
  return `https://raw.githubusercontent.com/${org}/${project}/${branch}/${file}`;
}

function getCurrentVersion(filePath) {
  try {
    const currentPackage = fs.readFileSync(`./${filePath}`);
    return JSON.parse(currentPackage).version;
  } catch (err) {
    throwProcessError(
      "Unable to find local package.json file. You must run in the project root dir."
    );
  }
}

function splitVersion(version) {
  return version.split(".").map((v) => parseInt(v, 10));
}

function compareVersions(options, orig, curr) {
  const { branch } = options;
  const version1 = splitVersion(orig);
  const version2 = splitVersion(curr);

  for (let i = 0; i < version1.length; i += 1) {
    if (version1[i] > version2[i]) {
      throwProcessError(
        `Current version (${curr}) is smaller than the version of ${branch} (${orig}).`
      );
    } else if (version2[i] > version1[i]) {
      console.log(`\nVersion checked: ${curr}\n`);
      return true;
    }
  }

  throwProcessError(
    `Current version (${curr}) is the same as ${branch} (${orig}).`
  );
}

const checkVersion = (options) => {
  const versionURL = getVersionURL(options);

  https
    .get(versionURL, (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        if (data.startsWith("404")) {
          throwProcessError(`Version not found in ${versionURL}`);
        }

        const masterVersion = JSON.parse(data).version;
        const currentVersion = getCurrentVersion(options.file);

        compareVersions(options, masterVersion, currentVersion);
      });
    })
    .on("error", (err) => {
      throwProcessError(err.message);
    });
};

module.exports.checkVersion = checkVersion;
