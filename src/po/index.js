import { BasePage } from ".//pages/base.page.js";
import { CreateNewPaste } from ".//components/newpaste.component.js";
import { CreatedPaste } from ".//components/createdpaste.component.js";
const basePage = new BasePage();
const createNewPaste = new CreateNewPaste();
const paste = new CreatedPaste();
export { basePage, createNewPaste, paste };
