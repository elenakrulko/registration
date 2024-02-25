class LoginPage {
    constructor() {
        this.loginInput = '#loginFrm_loginname';
        this.passwordInput = '#loginFrm_password';
        this.loginButton = '[title="Login"]';
    }

    login(userName, password) {
        cy.log('Fill in authorization fields');
        if (userName) {
            cy.get(this.loginInput).type(userName);
        } else {
            cy.log('username field not filled');
        }
        if (password) {
            cy.get(this.passwordInput).type(password);
        } else {
            cy.log('password field not filled');
        }
        cy.get(this.loginButton).click();
    }
}

export default LoginPage;