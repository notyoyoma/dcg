const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const isDevEnv = process.env.NODE_ENV === "development";

module.exports = {
  publicPath: "/",
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
      port: 3333,
      before: (app) => {
        app.use(bodyParser.json());

        // handle READ from data
        app.get("/data/*", (req, res) => {
          const filename = path.basename(req.url);
          fs.readFile(`./data/${filename}`, (_, json) => {
            let obj = JSON.parse(json);
            res.json(obj);
          });
        });

        // handle WRITE to data
        app.post("/data/*", (req, res, next) => {
          const filename = path.basename(req.url);
          fs.writeFile(
            `./data/${filename}`,
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
