import { basePage, createNewPaste, paste } from "./../po/index.js";

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

    await paste.newPasteWindow.waitForDisplayed();
    await expect(paste.infoName).toHaveText("helloweb");
    await expect(paste.codeTitle).toHaveText("Hello from WebDriver");
    await expect(paste.expire).toHaveText("10 MIN");
  });
});
