<div align="center">
  <a href="https://github.com/parcel-bundler/parcel">
    <img height="50" src="src/images/parcel-logo.svg" alt="parsel" />
  </a>
  <a href="https://github.com/facebook/react">
    <img height="50" src="src/images/react-logo.png" alt="react" />
  </a>
</div>
<br />
<div align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
  <a href="https://david-dm.org/jorgemcdev/parcel-react-starter">
    <img id="badge" src="https://david-dm.org/jorgemcdev/parcel-react-starter.svg" alt="badge" class="" data-reactid="68">
  </a>
  <a href="https://travis-ci.com/jorgemcdev/parcel-react-starter">
    <img src="https://travis-ci.com/jorgemcdev/parcel-react-starter.svg?branch=master" alt="travisCI">
  </a>
  <a href='https://coveralls.io/github/jorgemcdev/parcel-react-starter?branch=master'>
    <img src='https://coveralls.io/repos/github/jorgemcdev/parcel-react-starter/badge.svg?branch=master' alt='Coverage Status' />
  </a>
</div>

<p align="center">React Starter using Parcel Bundler</p>

<br />

# Features

- Blazing fast bundle times
- React
- Babel 7
- Hot Module Replacement
- Bundle all your assets: Css, Sass, images, svg, ...
- Env Vars, support loading environment variables from .env files
- Tests - Jest and Enzyme
- Coverage Report
- travisCI
- editorConfig
- Prettier

# Usage

```sh
# start the dev server
npm start

# build to production
npm run build

# delete .cache and dist folder
npm run clean

# eslint check
npm run lint

# execute an eslint and fix the errors
npm run lint:fix

# run tests
npm test
npm run test:watch - run tests in watch mode
npm run test:coverage - generate coverage report

# prettier check
npm run prettier:check

# prettier format
npm run prettier:write

```

# Commands

## Help

parcel help

## Version

parcel --version

# Options

## Output Directory

parcel build entry.js -d build/output

## Port

parcel serve entry.js --port 1111

## Change Log level

parcel entry.js --log-level 1

| Loglevel | Effect                                            |
| :------: | ------------------------------------------------- |
|    0     | Logging disabled                                  |
|    1     | Only log errors                                   |
|    2     | Log errors and warnings                           |
|    3     | Log errors, warnings and info                     |
|    4     | Verbose                                           |
|    5     | Debug (save everything to a file with timestamps) |

## Open in browser

parcel entry.js --open

## Disable content hashing

parcel build entry.js --no-source-maps

## Disable minification

parcel build entry.js --no-minify

[more options](https://en.parceljs.org/cli.html)

# Links

https://www.parceljs.org
