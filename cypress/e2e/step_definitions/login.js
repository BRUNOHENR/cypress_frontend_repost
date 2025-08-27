import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/loginpage.js';
import MenuPageLogin from '../pages/menuPage';

const menuPage = new MenuPageLogin()
const loginPage = new LoginPage()




Given("que acesso o site QA Pratice", () => {

cy.visit('/'); // A URL de login 
menuPage.clicarMenuForms()
menuPage.clicarMenuLogin()

});

When('eu preencho os dados Email e Password', () => {
  
  loginPage.preencherEmail()
  loginPage.preencherSenha()

});

When('eu clico no botão login', () => { 
//sleep ou wait
cy.wait(1000)
loginPage.clicarbotaologin()

});


Then('deve ser possivel realizar login com sucesso', () => {

loginPage.validarAcessoaPagina()

});




