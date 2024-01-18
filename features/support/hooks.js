"use strict";
var fs = require("fs");
const utils = require("./utils");

const { Builder, Browser, Capabilities } = require("selenium-webdriver");
const { Before, After } = require("@cucumber/cucumber");

Before(async () => {
  if (process.env.GIT == true) {
    const host = process.env.SELENIUM || "selenium";
    const browser = process.env.BROWSER
    const server = `http://${host}:4444/`;
    global.driver = new Builder()
      .usingServer(server)
      .forBrowser(Browser.browser)
      .build();
  } else {
    global.driver = new Builder().forBrowser(Browser.CHROME).build();
    
  }
  driver.manage().window().maximize();
});

After(async (scenario) => {
  await utils.takeScreenshot(scenario);
  await driver.quit();
});
