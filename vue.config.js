const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const isDevEnv = process.env.NODE_ENV === "development";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/prepend.scss";`,
      },
    },
  },
  configureWebpack: {
    entry: isDevEnv ? "./src/devMain.js" : "./src/main.js",
    devServer: {
      before: (app) => {
        app.use(bodyParser.json());

        // handle READ from data
        app.get("/data/*", (req, res, next) => {
          const filename = path.basename(req.url);
          fs.readFile(`./data/${filename}.json`, (err, json) => {
            let obj = JSON.parse(json);
            res.json(obj);
          });
        });

        // handle WRITE to data
        app.post("/data/*", (req, res, next) => {
          const filename = path.basename(req.url);
          fs.writeFile(
            `./data/${filename}.json`,
            JSON.stringify(req.body, null, 2),
            "utf8",
            (err) => {
              if (err) throw err;
              console.log(`${filename} has been saved!`);
              res.json({ success: true });
              next();
            }
          );
        });
      },
    },
  },
};
