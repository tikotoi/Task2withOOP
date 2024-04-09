import { BasePage } from "./../po/pages/base.page.js";
import { CreateNewPaste } from "./../po/components/newpaste.component.js";
//import { CreatedPaste } from "./../po/components/createdpaste.component.js";
const basePage = new BasePage();
const createNewPaste = new CreateNewPaste();
//const paste = CreatedPaste();

describe("Test suite 1", () => {
  beforeEach(async () => {
    await basePage.open();
  });

  it("check page title", async () => {
    await expect(browser).toHaveTitle(
      "Pastebin.com - #1 paste tool since 2002!"
    );
  });

  it("Create new paste", async () => {
    await createNewPaste.input("code").setValue("Hello from WebDriver");
    await createNewPaste.input("expirationInput").click();
    await createNewPaste.input("expiration").click();
    await createNewPaste.input("title").setValue("helloweb");
    await createNewPaste.saveBtn.waitForClickable();
    await createNewPaste.saveBtn.click();

    await $(".post-view.js-post-view").waitForDisplayed();
    await expect($(".info-top")).toHaveText("helloweb");
    await expect($(".de1")).toHaveText("Hello from WebDriver");
    await expect($(".expire")).toHaveText("10 MIN");

    // await paste.property("newPasteWindow").waitForDisplayed();
    // await expect(paste.property("infoName")).toHaveText("helloweb");
    // await expect(paste.property("codeTitle")).toHaveText("Hello from WebDriver");
    // await expect(paste.property("expire")).toHaveText("10 MIN");
  });
});
