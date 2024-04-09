export class BaseCompoenent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }
  get rootEl() {
    return $(this.rootSelector);
  }
}
