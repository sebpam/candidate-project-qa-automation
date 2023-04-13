import {
  protractor,
  browser,
  element,
  by,
  ExpectedConditions,
} from "protractor";
import Schedule from "../pages/Schedule";
import { expect } from "chai";
import {Scenario} from "../interfaces/Scenario";
const schedule = new Schedule();
import texts from "../config/texts.json";

class ScheduleTests {
  scenario: Scenario;
  constructor(scenario: Scenario) {
    this.scenario = scenario;
  }
  navigateToSchedulingPage() {
    before(async () => {
      await schedule.visit();
    });
    it("Should validate the title display", async () => {
      await schedule.waitForThisPresence(schedule.cityDropdown, 10000);
      expect((await schedule.pageTitle()).replace(/\s/g, "")).to.equal(
        "Schedule  | ZoomCare".replace(/\s/g, "")
      );
    });
  }

  navigateBacktoHomePage() {
    it("Should validate the logo display", async () => {
      expect(await schedule.logo.isDisplayed()).to.equal(true);
    });
    it("Should click the logo on the schedule page", async () => {
      await schedule.clickThis(schedule.logo, 100);
    });
  }
  validateSerfvieLineDisplays() {
    let showmore: number = this.scenario.showmore ? this.scenario.showmore : 0;
    let count: number = 5;
    let displayCount: number;
    it(`Should validate that 5 service clinics are displayed`, async () => {
      await schedule.waitForThisPresence(schedule.serviceLineBox.get(0), 10000);
      const x = await schedule.serviceLineBox;
      const displays = x.filter(async (e) => await e.isDisplayed());
      displayCount = displays.length;
      expect(count).to.equal(displayCount);
    });
    if (showmore > 0) {
      for (let i = 0; i < showmore; i++) {
        it("Should scroll down the page to display", async () => {
          await schedule.scrolldownPage(schedule.serviceLineBox.get(count - 1));
        });
        it("Should click the show more button", async () => {
          await schedule.scrolldownPage(await schedule.showMore);
          expect(await schedule.showMore.isDisplayed()).to.equal(true);
          await schedule.clickThis(schedule.showMore, 10000);
          await browser.sleep(3000);
        });
        it(`Should validate that service clinics display has updated`, async () => {
          count += 5;
          const x = await schedule.serviceLineBox;
          const displays = x.filter(async (e) => await e.isDisplayed());
          displayCount = displays.length;
          expect(count).to.equal(displayCount);
        });
      }
    }
  }
  validateInfoPopupDisplay() {
    it("Should click the info button", async () => {
      await schedule.clickThis(schedule.infoButton, 10000);
    });
    it("Should validate the short text", async () => {
      await schedule.waitForThisPresence(schedule.shortInfoText, 10000);
      expect(
        (await schedule.shortInfoText.getText()).replace(/\s/g, "")
      ).to.equal(texts.shortInfo.replace(/\s/g, ""));
    });
  }
}

export default ScheduleTests;
