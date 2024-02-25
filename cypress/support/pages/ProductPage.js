class ProductPage {
    findProduct(productName) {
        cy.get('body').then(($body) => {
            if ($body.find(`.prdocutname:contains("${productName}")`).length) {
                cy.get(`.prdocutname:contains("${productName}")`).first().click();
            } else {
                if ($body.find('.pagination li a:contains(">")').length) {
                    cy.get('.pagination li a:contains(">")').first().click();
                    this.findProduct(productName);
                } else {
                    cy.log('Product not found');
                }
            }
        });
    }
}

export default ProductPage;
