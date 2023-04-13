import Schedule from "../pages/Schedule";
import { expect } from "chai";
const schedule = new Schedule();
import * as moment from "moment";

class ScheduleTests {
  scenario;
  constructor(scenario) {
    this.scenario = scenario;
  }
  navigateToSchedulingPage() {
    it(":Should validate the title display", async () => {
      await schedule.waitForThisPresence(schedule.cityDropdown, 10000);
      expect((await schedule.pageTitle()).replace(/\s/g, "")).to.equal(
        "Schedule  | ZoomCare".replace(/\s/g, "")
      );
    });
  }
  validateDefaultSchedulePageDisplays() {}
}

export default ScheduleTests;
