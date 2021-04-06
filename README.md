# Rancid Tomatillos

A [Front-End Project](https://frontend.turing.io/projects/module-2/refactor-tractor.html) by [Jeff Shepherd](https://github.com/JeffShepherd) and [Reggie Thompson](https://github.com/rdtho2525).



1. [Overview](#overview)
2. [Planning Resources](#planning-resources)
3. [Set Up](#set-up)
4. [Learning Goals](#learning-goals)
5. [Technologies](#technologies)
6. [Features](#features)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Future Additions](#future-additions)


## Overview

This is a Turing School of Software and Design - Module 3 paired project.

The purpose of this project was to get brown-field project experience: working on a project that has already been built out and refactoring/updating the project to make for a better user and dev experience with the app. The project we were given was FitLit, an app that tracks a user's activity, like steps, flights of stairs climbed, and miles walked in a week, as well as their hydration and sleep habits. The app also tracks a user's friends' activity, and offers a friendly competition that displays on the UI. 

Our task was to redesign the layout, including the responsiveness of the app on various screen sizes, to make for a better UI, as well as refactor the code behind the scenes for better dev readability and empathy. At the same time, we removed all the hard-coded data, exchanged it for data fetched with an API, and implemented POST request functionality that subsequently updates the DOM. As we refactored the code, we followed TDD best practices to test each class's methods before hooking them up to the DOM. We also refactored the CSS to incorporate SASS files, mixins, and variables to DRY up this code and implemented a reset file so that our styling carries across multiple browsers.

## Planning Resources

* [GitHub Project Board](https://github.com/JeffShepherd/Rancid-Tomatillos/projects/1)
* [Miro Board - Class Structure Outline](https://miro.com/app/board/o9J_lNxtxTk=/)


## Set Up Instructions


Clone down this repository to your local machine:

```
git clone git@github.com:JeffShepherd/Rancid-Tomatillos.git
```

Then install the library dependencies by running:

```
npm install
```

To start application, run:

```
npm start
```

If you see `Compiled successfully!` in your terminal, the application is running and the app can be veiwed at `http://localhost:3000/` in your browser.



## Learning Goals

* Gain competency with React fundamentals
* Learn how to test React components & asynchronous JavaScript
* Practice refactoring
* Create a multi-page UX using Router


## Technologies

* JavaScript
* React
* React Router
* Cypress
* Git
* GitHub
* HTML
* CSS
* Fetch API

---
## Features

+ [Landing Page](#landing-page)
+ [Mobile Views](#mobile-views)
+ [Post Requests](#post-requests)


## Landing Page


<img src="src/images/Screen Shot 2021-03-03 at 7.42.23 PM.png">


## Mobile Views


![](https://media.giphy.com/media/khbZidy9qRf0e6CqGJ/giphy.gif)



## Post Requests


![](https://media.giphy.com/media/3N4gXjnexFyH37d611/giphy.gif)





---
## Challenges

* Inexperience working with brown-field projects
* Deciding where to start on the project
* Leveraging multiple new technologies that we learned during the project
* Refactoring complex methods

---
## Wins


* Great organization - we got through everything!
* Getting a better understand of the fetch API
* Leveraging complex methods needed for extensions
* Practicing array iterator methods

---
## Future Iterations

* Methods were left in each class that we thought had a sound practical purpose, but were not represented on the DOM. These would be great to display in further iterations.
* Implementing icons or buttons to hide or display information when a user clicks on them.

















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
