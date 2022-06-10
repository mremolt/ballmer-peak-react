# Ballmer Peak

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation 

* Make sure your local machine is set up for React development (NodeJS, Git, Code Editor). 
* Checkout the project with Git to your local machine. 
  * Optional: First fork the project to your own Github account if available.
* Install the NPM dependencies.
* Start the dev server.

## Interview tasks

Please choose one of the following tasks. 
Optional: If you finish the first one in time, you may of course take another. 

### UX task 

The users detail page currently only shows the raw data. 

Please display name, email, phone and company name of the current user in a nicely formatted way.
You may use the already installed [MUI library](https://mui.com/) or choose to roll your own styling via the installed [Emotion library](https://emotion.sh/) or simple CSS styling. The technical side is entirely up to you. 

### Code quality task

The code quality in the current project *can be improved* to put it mildly. 

Please identify code pieces lacking quality, then describe the existing problem and your suggested solution. 

Bonus: Try to improve some of the pieces with live coding. 

Bonus: Also keep in mind, the project will grow over time and is planned to contain dozens of individual pages. 
So also try to identify issues with the underlying architecture, that will probably bite the project later and suggest improvements. 

### Feature task

On the user detail page we need to also display the open TODOs for each user. 

Study the API on https://jsonplaceholder.typicode.com/ and add the described feature to the page. 
Some basic styling is required (no "JSON.stringify"), but it does not have to look pretty. ;)

Bonus: Also add unit tests for the new feature. 

### Testing task

The `User` and `UserDetail` component are both missing tests. Add sensible tests to at least one of the components. 

Also one test in `UserListItem` currently breaks. Please fix the test and also remove the underlying problem why the bug appeared. 


### Bug hunt

1. On http://localhost:3000/users an error message is displayed in the console regarding a "key" prop. Please remove that message.
2. The User Email is currently not displayed in the list of Users. Please fix the `UserListItem` Component and also remove the underlying problem why the bug appeared. 
3. In src/users/Users.tsx there currently is a workaround (the if-statement). If that is removed, the API request is repeated indefinitely. Please remove the workaround and replace it with a "best practices" solution. 

### Build task

The test suite currently throws an error. 
Please make all existing tests pass und also fix the underlying problem, which caused the error to slip in.
