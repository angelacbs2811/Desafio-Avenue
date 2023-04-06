describe('Bateria de testes API', () => {

    it('Validando status code 200', () => {
        //chamada para o endpoint da API
        cy.request({

            method: 'GET',

            url: `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=60c7a3a9d75d49106e23aa9ff714f5f4`,

            failOnStatusCode: false,

        // pego o retorno 
        }).as('response')

        //Validate status code

        cy.get('@response').its('status').should('eq', 200)

       
        })

        it('Validando nome da cidade', () => {
            //chamada para o endpoint da API
            cy.request({
    
                method: 'GET',
    
                url: `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=60c7a3a9d75d49106e23aa9ff714f5f4`,
    
                failOnStatusCode: false,
    
            // pego o retorno 
            }).as('response')
    
            //Validate status code
    
            cy.get('@response').its('body.name').should('eq', 'Zocca')
    
           
            })

            it('Validando latitude incorreta', () => {
                //chamada para o endpoint da API
                cy.request({
        
                    method: 'GET',
        
                    url: `https://api.openweathermap.org/data/2.5/weather?lat=4p.34&lon=10.99&appid=60c7a3a9d75d49106e23aa9ff714f5f4`,
        
                    failOnStatusCode: false,
        
                // pego o retorno 
                }).as('response')
        
                //Validate status code
        
                cy.get('@response').its('status').should('eq', 400)
    })
    it('Validando longitude incorreta', () => {
        //chamada para o endpoint da API
        cy.request({

            method: 'GET',

            url: `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.p9&appid=60c7a3a9d75d49106e23aa9ff714f5f4`,

            failOnStatusCode: false,

        // pego o retorno 
        }).as('response')

        //Validate status code

        cy.get('@response').its('status').should('eq', 400)
})


    it('Validando API key incorreta', () => {
        //chamada para o endpoint da API
        cy.request({

            method: 'GET',

            url: `https://api.openweathermap.org/data/2.5/weather?lat=4p.34&lon=10.99&appid=teste`,

            failOnStatusCode: false,

        // pego o retorno 
        }).as('response')

        //Validate status code

        cy.get('@response').its('status').should('eq', 401)
    })

    it('Validando ID correto', () => {
        //chamada para o endpoint da API
        cy.request({

            method: 'GET',

            url: `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=60c7a3a9d75d49106e23aa9ff714f5f4`,

            failOnStatusCode: false,

        // pego o retorno 
        }).as('response')

        //Validate status code

        cy.get('@response').its('body.id').should('eq', 3163858)
    })

})
