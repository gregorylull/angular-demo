### How to run on local environment
1. git clone this directory: `git clone https://github.com/gregorylull/angular-demo.git`
2. install [node.js](https://nodejs.org/en/) through .dmg which comes with npm packaged. Or better yet install with [nvm](https://github.com/creationix/nvm) which has an easy interface for version control
3. install [bower](http://bower.io/#install-bower) and run `bower install`
4. run `npm install`
5. run `npm start` (or run `gulp`)

### Overall flow of objectivies
- setup dev environment: backend
  - node/express to serve files
- setup dev environment: gulp
- Recreate phq9 hierarchy [link](http://patient.info/doctor/patient-health-questionnaire-phq-9)
- plug in css last to create responsive and 'stylish' app

### Site navigation and hierarchy
- site header  :: /api/site/info

- site navbar  :: /api/site/info
  - href: Questionnaire
  - href: About

- site views :: /api/views/:view
  - Questionnaire :: /api/views/questionnaire
    - page header
    - page navbar
      - article (actual questinnaire)
        - intro/background
        - form questions/choices
          - submit
            -> results
              - score
              - score explannation
              - opt: depression or higher > 3 options for therapists
                - submit -> confirmation
      - related (links for well being)
        - 

  - About :: /api/views/about
    - page header
    - page body
      - objective
      - tech stack





