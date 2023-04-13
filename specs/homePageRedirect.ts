import ScheduleTests from "../validations/scheduleTests";
import HomeTests from "../validations/HomeTests";
import fs from "fs";
const x = fs.readFileSync(process.cwd() + "/testScenarios/schedulePage.json");
const scenarios = Object.assign({}, JSON.parse(x.toString()));
const scheduleTests = new ScheduleTests(scenarios['homePageRedirect']);
const homeTests = new HomeTests(scenarios['homePageRedirect']);
describe("Test name = home Page Redirect", () => {
    scheduleTests.navigateToSchedulingPage();
    scheduleTests.navigateBacktoHomePage();
    homeTests.validateHomePageLanding();
});

