# Check My Package Version

![npm (tag)](https://img.shields.io/npm/v/check-my-package-version/latest?label=npm)
[![megatroom](https://circleci.com/gh/megatroom/check-my-package-version.svg?style=svg)](https://circleci.com/gh/megatroom/check-my-package-version)

Script to check package version against branches.

## Motivation

On projects where versioning is manual, this script can be used in continuous integration (CI) to notify that the current branch is not at a higher version than the main branch.

## Usage

You can run right from npx:

```bash
npx check-my-package-version --help
```

Output:

```bash
Usage: check-my-package-version [options]

Options:
  -V, --version         output the version number
  -o, --org <name>      organization name
  -p, --project <name>  project name
  -b, --branch <name>   branch name (default: "main")
  -h, --help            display help for command
```

Example using `https://github.com/facebook/react/`:

```bash
npx check-my-package-version -o facebook -p react
```

## Installation

Running the follow command to install the package:

```bash
# with NPM
npm install --save-dev check-my-package-version

# with Yarn
yarn add --dev check-my-package-version
```
