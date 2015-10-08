This app is deployed on Heroku: https://angular-demo-glull.herokuapp.com/ (please wait a few seconds for the server to 'wake up')

### Objectives:
0. Recreate PHQ9 Questionnaire [link](http://patient.info/doctor/patient-health-questionnaire-phq-9)

1. Take the PHQ-9 screener through my a mobile-friendly site and get the assessment score and what that means.

Questions are found on the link, answer choices correspond to numeric values:
0: Not at all
1: Several days
2: More than half the days in the week
3: Nearly every day

2. If the score is moderate depression or higher, present 3 doctors (fake names), and allow user to select one followed by a confirmation/thank you message

#### Tech Stack:
- angular
- angular-ui-router, angular-ui-bootstrap
- HTML/CSS, bootstrap CSS, normalize.css
- gulp, npm, bower, heroku CLI

### Thought process
- angular's form validation provides easy ways to add classes and style forms that are not valid (using ng-class and formName.$valid )
- since severity scale and score are almost immediately displayed when users first start clicking on answer choices I thought angular's two way binding might be a good choice
- repetition of question/answer blocks also make good use of angular directives for DOM manipulation
- the modal/popup for selecting doctors is 3rd party library (ui.bootstrap) but is easy to add in and start using
- the real site has multiple sections/tabs for extra information/articles, so maybe a good use for ui.router as well to create different routes, and both sibling and nested views

### How to run on local environment
1. git clone this directory: `git clone https://github.com/gregorylull/angular-demo.git`
2. install [node.js](https://nodejs.org/en/) through .dmg which comes with npm packaged. Or better yet install with [nvm](https://github.com/creationix/nvm) which has an easy interface for version control
3. install [bower](http://bower.io/#install-bower) and run `bower install`
4. run `npm install`
5. run `npm start` (or run `gulp`)
6. View on mobile: The shell/terminal should console log a Local and External ip:port address, to view this app locally on your phone, please log onto the same WiFi as your laptop, and enter the External IP address

### Overall flow of work process
- setup dev environment: backend
  - node/express to serve files
- setup dev environment: gulp + browserSync for watching and refreshing of browser
  - .module files are always loaded first so that directives/controllers/services and everything else that needs to be registered won't accidentally not be able to find its host
- wireframe/whiteboard routes, components, views, and simple models
- scrape PHQ9 website for questions and answers
- create folder hierarchy based on google angular best practices: [scotch.io explanation](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)
- plug in css last to create responsive and 'stylish' app

### Site navigation / directory explanation
The meat of this project resides in public/questionnaire, but we will get to that soon:
- At the root directory, there is a server.js and data.js, this is backend that "serves" data, not by retrieving from a database, but just through requiring the data.js file
- The Procfile is for deploying to heroku, and all other files are just for library dependencies on the front and backend
- At the root of the public/ folder is the index.html and index.module.js files, these basically load the vendor libraries and our js/css files
- Within the public/ folder, the build/ folder contains files that are created after a very simple Gulp automation process, just concatenation so far
- Within the public/components/ folder we have some reusable items that is not really dependent on the page we are on
- The public/services folder contains some services that could be used project wide, such as retrieving data from the backend

### Questionnaire
**note**: For this section I'll just use 'q' for 'questionnaire'
- q.module.js creates a module for our questionnaire, and also adds a state and route to the overall application so that the links in the navbar will work as a single page application
  - the template and views that are in the route correspond to q.view.html, and that is way to quickly separate and compartmentalize different sections/views of the app. Imagine that this questionnaire also had a sidebar with links to articles, or a user dashboard if login is required
- q.form.directive.js registers a directive that our q.module.js route system uses, and kicks off the entire form
- q.form.html is the template that holds everything, including modal directive to create the pop up

### Improvements
- refactor! instead of too much controller logic, move that into a service so the functions only need to be instantiated once
- refactor! The questionnaire folder is a bit dense right now, maybe even a sub module with that folder, and also the .form.html file is a bit large
- refactor! this is a small site doesn't completely follow the Google best practices, could consider moving home/ about/ and questionnaire/ into components directory
- UI/UX! site is not too pretty, maybe some more styling for background
- UI/UX! maybe instead of radio buttons on mobile, we use buttons instead...similar to iPhone General Settings screen





