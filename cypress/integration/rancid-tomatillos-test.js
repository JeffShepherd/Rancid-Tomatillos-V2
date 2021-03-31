describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it.skip('should display all movies on load', () => {
    cy.get('section').children().should('have.length', 40)
  });

  it.skip('should reveal a selected movie\'s details when clicked', () => {
    cy.get('article[id=337401]').click()
    cy.contains('When the Emperor')
  });

  it.skip('should hide the application\'s home view when a movie\'s details are displayed', () => {
    cy.get('article[id=337401]').click()
    cy.get('section[class=movie-container]').should('not.exist')
  });

  it.skip('should hide the applications\'s details view when the user returns to the home page', () => {
    cy.get('article[id=337401]').click()
    cy.get('button').click()
    cy.get('article[class=description]').should('not.exist');
  //**TEST FAILING DUE TO ASYNC NATURE, CONSIDER RE-WRITING W/ ROUTER**
  });

  it('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://rancid-tomatillos.herokuapp.com/api/v2/movi'
    },
    {
      statusCode: 500,
      body: { 
        message: 'We\'re sorry, an error has occurred. Please try again later.'
      }
    })
    .wait(5000)
    .get('h2[class=error-message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });
})

// describe('App Sad Paths', () => {
//   // it('should reveal an error message when the server returns a 500 status code', () => {
//   //   cy.intercept({
//   //     method: 'GET',
//   //     url: 'http://rancid-tomatillos.herokuapp.com/api/v2/movi'
//   //   },
//   //   {
//   //     statusCode: 500,
//   //     body: { 
//   //       message: 'We\'re sorry, an error has occurred. Please try again later.'
//   //     }
//   //   })
//   //   .wait(3000)
//   //   .get('h2[class=error-message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
//   // });
// })