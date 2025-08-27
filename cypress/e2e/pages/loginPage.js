require('cypress-xpath');
import PageBase from './pageBase/base';

export default class MenuPageLogin extends PageBase {
    elements = {
      
      preencherEmail:   () => cy.xpath('//input[@id="email"]'),
      preencherSenha: () => cy.xpath('//input[@id="password"]'),
      clicarbotaologin: () => cy.xpath('//button[@id="submitLoginBtn"]'),
      CampoTituloLogin: () => cy.xpath('//h2[@class="section-header"]')

    }
  
    preencherEmail() {
      this.elements.preencherEmail().type('admin@admin.com')
    }

    preencherSenha() {
      this.elements.preencherSenha().type('admin123')
    }

    clicarbotaologin() {
      this.elements.clicarbotaologin().click()
    }

    validarAcessoaPagina() {

      // timeout 
      this.elements.CampoTituloLogin().should('have.text', 'SHOPPING CART', { timeout: 7000 })
    }


  }
