const fs = require("fs");
const marge = require("mochawesome-report-generator");

const { merge } = require("mochawesome-merge");
exports.config = {
  allScriptsTimeout: 180000,
  baseUrl: "http://localhost:4200/",
  capabilities: {
    browserName: "chrome",
  },
  directConnect: true,
  framework: "mocha",
  mochaOpts: {
    timeout: 180000,
    reporter: "mocha-multi-reporters",
    //retries: 2,
    bail: false,
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        json: true,
        multiReport: true,
        inline: true,
        html: false,
        chart: true,
        overwrite: false,
      },
    },
  },
  directConnect: true,
  specs: ["./specs/**/*.ts"],
  onPrepare() {
    try{ 
        fs.unlinkSync("./mochawesome-report/mochawesome.json");
        fs.unlinkSync("./reports/mochawesome.html");
    }catch(e){
        console.log('Report has already been deleted')
    }
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
  },
  onComplete() {
    const options = {
      inline: true,
      charts: true,
      reportDir: "./reports",
    };
    return merge(options).then((report) => marge.create(report, options));
  },
};
