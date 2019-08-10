<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://parceljs.org/assets/parcel-front@2x.webp" alt="parsel" />
  </a>
  <a href="https://github.com/facebook/react">
    <img width="200" height="200" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react" />
  </a>
</div>
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

# parcel-react-starter

React Starter Kit using Parcel as Bundler

1. Install Parcel
   npm i -D parcel-bundler node-sass

2. babel
   npm i -D @babel/core @babel/plugin-transform-runtime @babel/preset-env
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
