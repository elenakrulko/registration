export function Authorization(username = '', password = ''){
    cy.log('Fill in authorization fields');
    username ? cy.get('#loginFrm_loginname').type(username) : cy.log('username field not filled');
    password ? cy.get('#loginFrm_password').type(password) : cy.log('password field not filled');
    cy.get('[title="Login"]').click();
}
export function FindProduct(productName = '') {
    cy.get('body').then(($body) => {
        if ($body.find('.prdocutname:contains("' + productName + '")').length) {
            cy.get('.prdocutname:contains("' + productName + '")').first().click();
        } else {
            if ($body.find('.pagination li a:contains(">")').length) {
                cy.get('.pagination li a:contains(">")').first().click();
                FindProduct(productName);
            } else {
                cy.log('Product not found');
            }
        }
    });
}

