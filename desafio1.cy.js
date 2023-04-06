// Cenário: Adicionar produto ao carrinho


describe('Teste Carrinho na Amazon', () => {
  it('Pesquisar um produto e adicionar ao carrinho', () => {
    cy.visit('https://www.amazon.com.br');

    cy.get('#twotabsearchtextbox').type('shampoo').type('{enter}');
    
    cy.get('[data-component-type="s-search-result"]').first().click();

    cy.get('#add-to-cart-button').click();

	  cy.get('#nav-cart-count').click();
    
    cy.should('exist');
  });
});
