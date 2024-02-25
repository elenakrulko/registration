import RegistrationPage from '../support/pages/RegistrationPage';
import LoginPage from '../support/pages/LoginPage';
import ProductPage from '../support/pages/ProductPage';

describe('User Registration and Login', () => {
  let userInfo = { username: null, password: null };

  it('User Registration', () => {
    const registrationPage = new RegistrationPage();
    registrationPage.visit();
    registrationPage.navigateToRegistrationForm()
    userInfo = registrationPage.registerUser();
    registrationPage.submitRegistrationForm();
  });

  it('User Login and Product Search', () => {
    const loginPage = new LoginPage();
    const productPage = new ProductPage();

    cy.log('Open login form');
    cy.visit('/index.php?rt=account/login');

    loginPage.login(userInfo.username, userInfo.password);

    cy.get('#filter_keyword').type('E {enter}');
    productPage.findProduct("Body Cream by Bulgari");

  });
});
