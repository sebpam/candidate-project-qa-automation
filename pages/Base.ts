import {
  browser,
  ExpectedConditions,
  element,
  by,
  protractor,
} from "protractor";
import urls from "../config/urls";

class Base {
  private timeout;
  constructor() {
    this.timeout = 30000;
  }
  async visit() {
    browser.ignoreSynchronization = true;
    await browser.get(urls.zoomCare);
    await browser.driver.manage().window().maximize();
  }
  async waitForThisPresence(elm, milliseconds?: number) {
    let pause: number = milliseconds || this.timeout;
    await browser.wait(ExpectedConditions.presenceOf(elm), pause);
  }
  async waitForThisClickability(elm, milliseconds?: number) {
    let pause: number = milliseconds || this.timeout;
    await browser.wait(ExpectedConditions.elementToBeClickable(elm), pause);
  }
  async clickThis(elm, milliseconds?: number) {
    let pause: number = milliseconds || this.timeout;
    await this.waitForThisPresence(elm, pause);
    await this.waitForThisClickability(elm, pause);
    await elm.click();
  }
  async scrolldownPage(elm) {
    browser.actions().mouseMove(elm).perform();
  }
}

export default Base;
