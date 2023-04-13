import ScheduleTests from "../validations/scheduleTests";
import HomeTests from "../validations/HomeTests";
import fs from "fs";
const x = fs.readFileSync(process.cwd() + "/testScenarios/schedulePage.json");
const scenarios = Object.assign({}, JSON.parse(x.toString()));
const scheduleTests = new ScheduleTests(scenarios['display15Count']);
const homeTests = new HomeTests(scenarios['display15Count']);
describe("Test name = Default 15 clinics display", () => {
    scheduleTests.navigateToSchedulingPage();
    scheduleTests.validateSerfvieLineDisplays();
});

