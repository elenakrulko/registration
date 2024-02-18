import user from '../fixtures/user.json'
import {Authorization, FindProduct} from "../support/helper";

describe('Authorization', () => {
    it('Authorization', () => {
        cy.log('Open authorization form');
        cy.visit('/index.php?rt=account/login');

        Authorization(user.loginname, user.password);

        cy.get('#filter_keyword').type('E {enter}');

        FindProduct("Body Cream by Bulgari");
    })
})
