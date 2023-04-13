import Base from "./base";
import { browser, element, by, ExpectedConditions } from "protractor";

class GoogleMap extends Base {
  constructor() {
    super();
  }
  async pageTitle(): Promise<string> {
    return await browser.getTitle();
  }
  searchbox = element(by.id("directions-searchbox-0"));
}

export default GoogleMap;
