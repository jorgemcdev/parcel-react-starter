<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>


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


