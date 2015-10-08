This app is deployed on Heroku: https://angular-demo-glull.herokuapp.com/ (please wait a few seconds for the server to 'wake up')

### Objectives:
- Recreate phq9 hierarchy [link](http://patient.info/doctor/patient-health-questionnaire-phq-9)
- tech stack: angular, angular-ui-router, angular-ui-router-bootstrap, bootstrap CSS, gulp, npm, bower, heroku CLI

### How to run on local environment
1. git clone this directory: `git clone https://github.com/gregorylull/angular-demo.git`
2. install [node.js](https://nodejs.org/en/) through .dmg which comes with npm packaged. Or better yet install with [nvm](https://github.com/creationix/nvm) which has an easy interface for version control
3. install [bower](http://bower.io/#install-bower) and run `bower install`
4. run `npm install`
5. run `npm start` (or run `gulp`)
6. View on mobile: The shell/terminal should console log a Local and External ip:port address, to view this app locally on your phone, please log onto the same WiFi as your laptop, and enter the External IP address

### Overall flow of process
- setup dev environment: backend
  - node/express to serve files
- setup dev environment: gulp + browserSync for watching and refreshing of browser
- wireframe/whiteboard routes, components, views, and simple models
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

### Improvements
- refactor! The questionnaire folder is a bit dense right now, maybe even a sub module with that folder, and also the .form.html file is a bit large





