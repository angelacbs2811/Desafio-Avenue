
// Teste de compra de produtos
describe('Teste 3 produtos no Carrinho na Amazon', () => {
    it('Pesquisar 3 produtos e adicionar ao carrinho', () => {
    
      // Visitar a página do site onde os produtos estão disponíveis
      cy.visit('https://www.amazon.com.br');
      //Adicionando o primeiro item
      cy.get('#twotabsearchtextbox').type('shampoo').type('{enter}');
    
    cy.get('[data-component-type="s-search-result"]').first().click();

    cy.get('#add-to-cart-button').click();
  
      //Adicionando o segundo item
      cy.get('#twotabsearchtextbox').type('condicionador').type('{enter}');
    
      cy.get('[data-component-type="s-search-result"]').first().click();

      cy.get('#add-to-cart-button').click();
  
      //Adicionando o terceiro item
      cy.get('#twotabsearchtextbox').type('shampoo').type('{enter}');
    
      cy.get('[data-component-type="s-search-result"]').first().click();

      cy.get('#add-to-cart-button').click();
  
      //Valide se o valor total do carrinho está correto
      //Clique no ícone do carrinho no canto superior direito da página utilizando o comando 
      cy.get('#nav-cart-count-container').click();
  
      //Obtenha o valor total do carrinho utilizando o comando 
      cy.get('#sc-subtotal-amount-activecart').invoke('text');
  
      //Verifique se o valor total está correto utilizando o comando 
      cy.get('#sc-subtotal-amount-activecart').invoke('text').should('eq', 'valor esperado');
      
    });
  });
  