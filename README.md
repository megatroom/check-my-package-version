# Check My Package Version

[![megatroom](https://circleci.com/gh/megatroom/check-my-package-version.svg?style=svg)](https://circleci.com/gh/megatroom/check-my-package-version)

Script to check package version against branches

## Installation

Running the follow command to install the package:

```bash
# with NPM
npm install --save-dev check-my-package-version

# with Yarn
yarn add --dev check-my-package-version
```

## API

```bash
check-my-package-version [org] [repo] [branch]
```

| Param    | Default | Description                                |
| -------- | ------- | ------------------------------------------ |
| `org`    | -       | GitHub org name                            |
| `repo`   | -       | GitHub repository name                     |
| `branch` | `main`  | Branch name to compare with current branch |
