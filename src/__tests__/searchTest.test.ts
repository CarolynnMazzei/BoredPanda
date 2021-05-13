import { BoredPandaPage } from "./BoredPanda";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new BoredPandaPage(driver);

test("it works", async () => {
  await page.navigate();
  await page.doSearch("cats");
  expect(await page.getResults()).toContain("cats");
});
afterAll(async () => {
  await driver.quit();
});