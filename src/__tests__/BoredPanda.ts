import { By, until, WebDriver } from "selenium-webdriver";



export class BoredPandaPage {
  driver: WebDriver;
 
  url: string = "https://www.boredpanda.com/";

  header: By = By.css(".bp-container");
  login: By = By.css(".login-url");
  emailInput: By = By.name("email");
  passwordInput: By = By.name("password");
  searchInput: By = By.name("s");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  async navigate() {
    await this.driver.get(this.url);
  }

  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }

  async doSearch(text: string) {
    // return this.sendKeys(this.searchBar, `${text}\n`);
  }

  async getHeader2() {
    console.log("Header ==" + this.getText(this.header));
    return this.getText(this.header);
  }

  async getPageText() {
    let data = [];
    await this.driver.wait(until.elementsLocated(this.header));
 
    let elements = await this.driver.findElements(this.header);
    for (let i = 0; i < elements.length; i++) {
      data.push(await (await elements[i].getText()));
    }

   // console.log("Text DATA == " + data);

    return data;
  }

  async clickLogin() {

    //console.log("Click Search");

    //await (await this.driver.findElement(By.css(".svg-icon"))).click();

    //console.log("Type name");

    //await this.driver
   // .findElement(this.searchInput)
   // .sendKeys("cats");


    await this.driver.wait(
      until.elementLocated(By.css(".login-url"))
    );

    console.log("Click Login == ");

    await (await this.driver.findElement(By.linkText("Login / Register"))).click();

    console.log("Load Login");

    await this.driver.wait(until.elementLocated(By.name("email")));

    console.log("Check email input visible");

    await this.driver.wait(until.elementLocated(this.emailInput));
  
      await this.driver.findElement(this.emailInput).clear();
      await this.driver
        .findElement(this.emailInput)
        .sendKeys("carlosb3199@yahoo.com");

    await this.driver.wait(until.elementLocated(this.passwordInput));
  
      await this.driver.findElement(this.passwordInput).clear();
      await this.driver
        .findElement(this.passwordInput)
        .sendKeys("DevMountain123");
    
    console.log("Click Submit");


    await (await this.driver.findElement(By.css(".btn-primary"))).click();

    await this.driver.wait(
      until.elementLocated(By.css(".user-menu"))
    );

 

  }
}