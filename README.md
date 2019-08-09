<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>
<div align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</div>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![downloads][downloads]][npm-url]

# parcel-react-starter
React Starter Kit using Parcel as Bundler


1. Install Parcel
npm i -D parcel-bundler node-sass

2. babel
npm i -D  @babel/core @babel/plugin-transform-runtime @babel/preset-env
npm i -S @babel/runtime

.babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-transform-runtime"]
}

3. React
npm i -S react react-dom prop-types
mkdir src
index.js
index.html

4. Update package.json


