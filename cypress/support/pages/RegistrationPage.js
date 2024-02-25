import {faker} from '@faker-js/faker';

class RegistrationPage {
    constructor() {
        this.url = 'https://automationteststore.com/';
        this.customerMenuTop = '#customer_menu_top';
        this.checkIcon = '.fa.fa-check.fa';
        this.firstNameField = '[name="firstname"]';
        this.lastNameField = '[name="lastname"]';
        this.emailField = '#AccountFrm_email';
        this.telephoneField = '[name="telephone"]';
        this.faxField = '[name="fax"]';
        this.companyField = '[name="company"]';
        this.address1Field = '[name="address_1"]';
        this.address2Field = '[name="address_2"]';
        this.cityField = '[name="city"]';
        this.postcodeField = '[name="postcode"]';
        this.countrySelect = '#AccountFrm_country_id';
        this.zoneSelect = '#AccountFrm_zone_id';
        this.loginNameField = '[name="loginname"]';
        this.passwordField = '[name="password"]';
        this.confirmPasswordField = '#AccountFrm_confirm';
        this.newsletterNoOption = '#AccountFrm_newsletter0';
        this.agreeCheckbox = '[name="agree"]';
        this.continueButton = '[title="Continue"]';
    }

    visit() {
        cy.visit(this.url);
    }

    navigateToRegistrationForm() {
        cy.get(this.customerMenuTop).click();
        cy.get(this.checkIcon).click();
    }

    registerUser() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const phone = faker.phone.number();
        const company = faker.company.name();
        const address1 = faker.address.streetAddress();
        const address2 = faker.address.secondaryAddress();
        const city = faker.address.city();
        const postcode = faker.address.zipCode();
        const userName = faker.internet.userName();
        const password = faker.internet.password();


        cy.get(this.firstNameField).type(firstName);
        cy.get(this.lastNameField).type(lastName);
        cy.get(this.emailField).type(email);
        cy.get(this.telephoneField).type(phone);
        cy.get(this.faxField).type(phone);
        cy.get(this.companyField).type(company);
        cy.get(this.address1Field).type(address1);
        cy.get(this.address2Field).type(address2);
        cy.get(this.cityField).type(city);
        cy.get(this.postcodeField).type(postcode);
        cy.get(this.countrySelect).select('Poland');
        cy.get(this.zoneSelect).select('Mazowieckie');
        cy.get(this.loginNameField).type(userName);
        cy.get(this.passwordField).type(password);
        cy.get(this.confirmPasswordField).type(password);
        cy.get(this.newsletterNoOption).click();
        cy.get(this.agreeCheckbox).click();
        return { username: userName, password: password };
    }

    submitRegistrationForm() {
        cy.get(this.continueButton).click();
    }
}

export default RegistrationPage;
