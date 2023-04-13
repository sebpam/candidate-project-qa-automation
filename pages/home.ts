import Base from "./base";
import { browser, element, by, ExpectedConditions } from "protractor";
class Home extends Base {
  constructor() {
    super();
  }
  async pageTitle(): Promise<string> {
    return await browser.getTitle();
  }
  header = element(by.xpath("//h1[@class='heading-24']"));
}
export default Home;
