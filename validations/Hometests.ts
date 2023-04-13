import Home from "../pages/Home";
import { expect } from "chai";
const home = new Home();
import {Scenario} from "../interfaces/Scenario";

class HomeTests {
  scenario;
  constructor(scenario) {
    this.scenario = scenario;
  }
  validateHomePageLanding() {
    it(":Should validate the title display", async () => {
      await home.waitForThisPresence(home.header, 3000);
      expect((await home.pageTitle()).replace(/\s/g, "")).to.equal(
        "ZoomCare | Beyond Better Healthcare".replace(/\s/g, "")
      );
    });

    it(":Should validate the home page header display", async () => {
      expect(await (await home.header).getText()).to.equal(
        "Healthcare on your schedule."
      );
    });
  }
}

export default HomeTests;
