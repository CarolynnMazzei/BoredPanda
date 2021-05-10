import { BoredPandaPage } from "./BoredPanda";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new BoredPandaPage(driver);

  let data;
test("check header 1", async () => {
  await page.navigate();
  data = await page.getPageText();
  expect(data[2]).toContain("Art"); 
});


test("check header 2", async () => {
   expect(data[2]).toContain("Photography"); 
});

test("check header 3", async () => {
  expect(data[2]).toContain("Animals"); 
});

test("check header 4", async () => {
  expect(data[2]).toContain("Funny"); 
});

test("check header 5", async () => {
  expect(data[2]).toContain("More"); 
});


//test("check article 1", async () => {
  //expect(data[5]).toContain("35 Things That"); 
//});

  //test("check article 2", async () => {
  //expect(data[5]).toContain("Owners Thought This Kitten Was Odd-Looking"); 
//});

test("Log-in", async () => {
  await page.clickLogin();
});


afterAll(async () => {
  await driver.quit();
});