require('cypress-xpath');
import PageBase from './pageBase/base';

export default class MenuPageLogin extends PageBase {
    elements = {
      menuForms:    () => cy.get('#forms'),
      menuLogin:    () => cy.get('#login'),

    }
  

    clicarMenuForms() {

      this.elements.menuForms().click()
    }

    clicarMenuLogin() {
      this.elements.menuLogin().click()
    }
}
