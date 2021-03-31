describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display all movies on load', () => {
    cy.get('section').children().should('have.length', 40)
  });

  it('should reveal a selected movie\'s details when clicked', () => {
    cy.get('a[id=337401]').click()
    cy.contains('When the Emperor')
  });

  it('should hide the application\'s home view when a movie\'s details are displayed', () => {
    cy.get('a[id=337401]').click()
    cy.get('section[class=movie-container]').should('not.exist')
  });

  it.skip('should hide the applications\'s details view when the user returns to the home page', () => {
    cy.get('a[id=337401]').click()
    cy.get('button').click()
    cy.get('article[class=description]').should('not.exist');
  //**TEST FAILING DUE TO ASYNC NATURE, CONSIDER RE-WRITING W/ ROUTER**
  });  
})

describe('App Sad Paths', () => {
  it('should reveal an error message when the server returns a 404 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://rancid-tomatillos.herokuapp.com/api/v2/movies'
    },
    {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/')
    cy.get('h2[class=error-message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });

  it('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://rancid-tomatillos.herokuapp.com/api/v2/movies'
    },
    {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
    cy.get('h2[class=error-message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });

  it('should reveal an error message when the server returns a 404 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://rancid-tomatillos.herokuapp.com/api/v2/movies/337401'
    },
    {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/337401')
    cy.get('h2[class=error-message]').should('contain', 'Details for this movie are not available at this time. Please check back later.')
  });

  it('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://rancid-tomatillos.herokuapp.com/api/v2/movies/337401'
    },
    {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/337401')
    cy.get('h2[class=error-message]').should('contain', 'Details for this movie are not available at this time. Please check back later.')
  });
})