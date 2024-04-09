import { basePage, createNewPaste, paste } from "./../po/index.js";

describe("Test suite 1", () => {
  beforeEach(async () => {
    await basePage.open();
  });

  it("check page title", async () => { await expect(browser).toHaveTitle(
      "Pastebin.com - #1 paste tool since 2002!"
    );
  });

  it("Create new paste", async () => {
    await createNewPaste.input("code").setValue("git config --global user.name 'New Sheriff in Town'\ngit reset $(git commit-tree HEAD^{tree} -m 'Legacy code')\ngit push origin master --force"
      );
    await createNewPaste.input("syntaxInput").click();
    await createNewPaste.input("syntax").click();
    await createNewPaste.input("expirationInput").click();
    await createNewPaste.input("expiration").click();
    await createNewPaste.input("title").setValue("how to gain dominance among developers");
    await createNewPaste.saveBtn.waitForClickable();
    await createNewPaste.saveBtn.click();

    await paste.newPasteWindow.waitForDisplayed();
    await expect(browser).toHaveTitle("how to gain dominance among developers - Pastebin.com");
    await expect(paste.codeTitle).toHaveText("git reset $(git commit-tree HEAD^{tree} -m 'Legacy code')");
    await expect(paste.syntax).toHaveText("Bash");
  });
});