User flows to test:

[x] As a user, when I visit the app, all movies should be displayed
[x] As a user, I can click a movie and see that movie's details
[x] When a movie's details are displayed, none of the other movies are visible
[x] When a movie's details are displayed, the user should have a way to return to the main view of all movies
[x] When the server returns an error, the user will see proper handling
[x] As a user, when I click on a movie, provided the details page is rendered, the URL updates to reflect that movie's unique ID as well
[x] As a user, I can click the browser's back and forth arrows to navigate through the app

Questions from 3/31 Cypress lesson:
+ What is the point of intercepting, besides enforcing a failstate, or posting
  + Stub (mock) requests are not actual requests.
  + Requests can be expensive; both literally and in terms of time
  + Don't pollute production data with test data
  + APIs are rate limited

+ Should I try to limit number of tests to keep concise as possible?
  + Test suite should be as robust as possible
  + Anything the user can interact with on the app should be tested

+ How do I split up user stories now that my before hooks can include specific paths?
+ Who is clicking all the things when you test???
  + Cypress; 
+ What are some best practice for confirm that a page is loading correctly?
  + Be specific, but not verbose
  + SRP tests; balance maintainability/readability

+ Can intercepts affect the state of the test if their ‘listener’ address is never called?
+ When would you use this versus a longer version? .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie_data.json' })

+ Can you use one cy in an it block?
+ Can we use functions to iterate over multiple elements for testing?
+ How do you test something that appears on hover?

+ Can you show us an example of using a fixture
  + 
+ Do you need a .then to make stubbing with a fixture work?
+ Do data fixtures have to match the data structure of the API or the state structure?

+ Stubbing in Cypress
  + Steps: 
    + know what network requests are being made
    + know what the network requests return to client
    + tell Cypress to listen for requests to those endpoints
      + intercept()
    + tell Cypress what to return instead of doing that request
      + second argument in intercept()
      + fixture (optional)
    + tell Cypress about these intercepts BEFORE our React code makes the requests

+ How the fuck do you stub!!!
+ An example of stubbing
+ How make stubbing/intercept work
+ If we use multiple intercepts does their order matter?
I understand the stubbing with a POST request, but I’m not understanding how to do it with a GET request.
How does the interact with the intercept() specifically with “GET” or initial page load.  
beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

















