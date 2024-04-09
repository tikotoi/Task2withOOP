export class CreatedPaste {
  property(name) {
    const selectors = {
      codeTitle: ".de1",
      infoName: ".info-top",
      expire: ".expire",
      newPasteWindow: ".post-view.js-post-view",
    };
    return $(selectors[name]);
  }
}
