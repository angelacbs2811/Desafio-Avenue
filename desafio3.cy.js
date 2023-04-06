// Arquivo: amazon.spec.js

describe('Amazon Brasil', () => {
    it('Criação de nova conta', () => {
      // Acessa o site da Amazon Brasil
      cy.visit('https://www.amazon.com.br/');
  
      // Clica no botão de "Olá, Faça seu login"
      cy.get('#nav-link-accountList-nav-line-1').click();
  
      // Clica em Criar sua Conta na Amazon
      cy.get('#createAccountSubmit').click();
  
      // Preenche o campo de nome
      cy.get('#ap_customer_name').type('Angela Sousa');
  
      // Preenche o campo de e-mail
      cy.get('#ap_email').type('angela@email.com.br');
  
      // Preenche o campo de senha
      cy.get('#ap_password').type('senha@123');
      
      // Preenche o campo Insira a sneha nova mais uma vez
      cy.get('#ap_password_check').type('senha@123');
      
    });
  });
  
  