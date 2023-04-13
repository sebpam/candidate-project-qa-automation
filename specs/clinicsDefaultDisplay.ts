import ScheduleTests from "../validations/scheduleTests";
import HomeTests from "../validations/HomeTests";
import fs from "fs";
const x = fs.readFileSync(process.cwd() + "/testScenarios/schedulePage.json");
const scenarios = Object.assign({}, JSON.parse(x.toString()));
const scheduleTests = new ScheduleTests(scenarios['default']);
const homeTests = new HomeTests(scenarios['default']);
describe("Test name = Default 5 clinics display", () => {
    scheduleTests.navigateToSchedulingPage();
    scheduleTests.validateSerfvieLineDisplays();
});

