export class CreateNewPaste {
  /**
   * @param name {'code' | 'expirationInput' | 'expiration' | 'title'|}
   * @returns retrune {*}
   */

  input(name) {
    const selectors = {
      code: "#postform-text",
      expirationInput: "#select2-postform-expiration-container",
      expiration: "//li[text()='10 Minutes']",
      title: "#postform-name",
    };
    return $(selectors[name]);
  }

  get saveBtn() {
    return $(".btn.-big");
  }
}
