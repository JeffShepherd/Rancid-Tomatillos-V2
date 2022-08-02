describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should display all movies on load', () => {
    cy.get('section').children().should('have.length', 40)
  });

  it('should display a movie\'s poster, title, and its freshness rating on home page', () => {
    cy.get('a[id=337401]')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
    
    cy.get('a[id=337401]')
      .click();
    cy.contains('Mulan')
    cy.contains('51%')
  });

  it('each movie displayed should have a unique alt tag', () => {
    cy.get('a[id=337401]')
      .find('img')
      .should('have.attr', 'alt')
      .should('include', 'Mulan')

    cy.get('a[id=718444]')
      .find('img')
      .should('have.attr', 'alt')
      .should('include', 'Rogue')
  });

  it('should reveal a selected movie\'s details when clicked', () => {
    cy.get('a[id=337401]').click()
    cy.get('.image-container')
      .find('img')
      .should('have.attr', 'src')
      .should('include','https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg')
    cy.contains('51%')
    cy.contains('When the Emperor')
    cy.contains('Action')
    cy.contains('2020-09-04')
    cy.contains('115 mins.')
    cy.contains('$200.00 m.')
    cy.contains('$57.00 m.')
  });

  it('should hide the application\'s home view when a movie\'s details are displayed', () => {
    cy.get('a[id=337401]').click()
      .url().should('include', '/337401')
      .get('section[class=movie-container]').should('not.exist')
  });

  it('should hide the applications\'s details view when the user returns to the home page', () => {
    cy.get('a[id=337401]').click()
    cy.get('.home-button').click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('should be able to navigate back and forth with browser arrows', () => {
    cy.get('a[id=337401]').click()
    cy.get('.home-button').click()
    cy.go('back')
      .url().should('include', '/337401')
      .go('forward')
      .url().should('eq', 'http://localhost:3000/')
  });

  it('should be able to filter movie cards by user input in search field from home view', () => {
    cy.get('input')
      .type('the')
    
    cy.get('a[class=search-link]').click()

    cy.get('a[id=659986]')
      .first()
  });

  it('should be able to filter movie cards by user input in search field from details view', () => {
    cy.get('a[id=337401]').click()
    
    cy.get('input')
      .type('the')
    
    cy.get('a[class=search-link]').click()

    cy.get('a[id=659986]')
      .first()
  });

  it('should be able to sort movie cards by Freshness in descending order', () => {
    cy.get('select')
      .select('Freshness')

    cy.get('a[id=726739]')
      .first()
  });

  it('should be able to sort movie cards by Title in descending order', () => {
    cy.get('select')
      .select('Title')

    cy.get('a[id=528085]')
      .first()
  });


  it('if a user selects a movie from the list of filtered or sorted results, the center message should be hidden', () => {
    cy.get('select')
      .select('Title')

    cy.get('a[id=528085]')
      .click()
      .get('h2[class=message]').should('not.exist')
  });
})


describe('App Sad Paths', () => {
  it('should reveal an error message when the server returns a 404 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    },
    {
      statusCode: 404
    })
    
    cy.visit('http://localhost:3000/')
    cy.get('h2[class=message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });

  it('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    },
    {
      statusCode: 500
    })

    cy.visit('http://localhost:3000/')
    cy.get('h2[class=message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });

  it('should reveal an error message when the server returns a 404 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401'
    },
    {
      statusCode: 404
    })

    cy.visit('http://localhost:3000/337401')
    cy.get('h2[class=message]').should('contain', 'Details for this movie are not available at this time. Please check back later.')
  });

  it('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401'
    },
    {
      statusCode: 500
    })

    cy.visit('http://localhost:3000/337401')
    cy.get('h2[class=message]').should('contain', 'Details for this movie are not available at this time. Please check back later.')
  });
})