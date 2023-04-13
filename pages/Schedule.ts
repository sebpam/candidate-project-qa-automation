import Base from "./base";
import { browser, element, by, ExpectedConditions } from "protractor";

class Schedule extends Base {
  constructor() {
    super();
  }
  async pageTitle(): Promise<string> {
    return await browser.getTitle();
  }
  cityDropdown = element(
    by.xpath("//div[@data-testid='quickSelector.location.popover']")
  );
  logo = element.all(by.xpath("//a//img[@alt='Zoomcare logo']")).get(0);
  serviceLineBox = element.all(
    by.xpath("//div[@data-testid='ServiceLine.1.ClinicSection']")
  );
  showMore = element(by.xpath("//div[@data-testid='text-Show More']"));
  infoButton = element.all(by.xpath("//div[text()='Info | $']")).get(0);
  shortInfoText = element(
    by.xpath("//span[contains(@data-testid, 'text-Schedule from over')]")
  );
}

export default Schedule;
