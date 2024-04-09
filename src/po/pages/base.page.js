export class BasePage {
  async open() {
    await browser.url("https://pastebin.com/");
  }
}
