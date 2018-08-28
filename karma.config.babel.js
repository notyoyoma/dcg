import webpackConfig from "./webpack.config.babel.js";
webpackConfig.entry = ()=>({});

const config = {
  basePath: "",
  frameworks: [
    "mocha",
    "chai",
  ],

  reporters: ["progress"],
  port: 9876,
  colors: false,
  autoWatch: true,
  browsers: ["Chrome"],
  singleRun: false,
  autoWatchBatchDelay: 300,

  files: [
    "src/main.js",
    "src/**/*.test.js",
  ],

  preprocessors: {
    "./src/main.js": ["webpack"],
    "./src/**/*.test.js": ["webpack"],
  },

  webpack: webpackConfig,

  webpackMiddleware: {
    stats: "errors-only"
  }
};

export default cfg => cfg.set(config);