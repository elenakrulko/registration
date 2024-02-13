describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top').click();
        cy.get('.fa.fa-check.fa').click();
        cy.get('[name="firstname"]').type("Olena");
        cy.get('[name="lastname"]').type("Krulko");
        cy.get('#AccountFrm_email').type("test.krulko@gmail.com");
        cy.get('[name="telephone"]').type("123456789");
        cy.get('[name="fax"]').type("987654321");
        cy.get('[name="company"]').type("Krulko & Co");
        cy.get('[name="address_1"]').type("Latarnika 1");
        cy.get('[name="address_2"]').type("Obywatelska 24");
        cy.get('[name="city"]').type("Warszawa");
        cy.get('[name="postcode"]').type("02-342");
        cy.get('#AccountFrm_country_id').select('Poland');
        cy.get('#AccountFrm_zone_id').select('Mazowieckie');
        cy.get('[name="loginname"]').type("okrulko");
        cy.get('[name="password"]').type("bebebe");
        cy.get('#AccountFrm_confirm').type("bebebe");
        cy.get('#AccountFrm_newsletter0').click();
        cy.get('[name="agree"]').click();
        cy.get('[title="Continue"]')//.click(); //не уточнила, надо ли нажимать на continue
    })
})
