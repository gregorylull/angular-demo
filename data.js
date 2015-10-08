/*
  0: Not at all
  1: Several days
  2: More than half the days in the week
  3: Nearly every day


*/

(function () {
  'use strict';

  var data = {};

  // comment out questions here (no trailing commas allowed in last array item)
  data.questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading the newspaper or watching television?",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
    "Thoughts that you would be better off dead, or of hurting yourself in some way?"
  ];

  data.answers = [
    ['Not at all', 0],
    ['Several days', 1],
    ['More than half the days in the week', 2],
    ['Nearly every day', 3]
  ];

  data.severityScale = [
    {s: 'none', min: 0, max: 4},
    {s: 'mild', min: 5, max: 9},
    {s: 'moderate', min: 10, max: 14},
    {s: 'moderately-severe', min: 15, max: 19},
    {s: 'severe', min: 20, max: 27}
  ];

  data.doctors = [
    {n: 'Dr. Nick', p: '555-555-5551'},
    {n: 'Dr. Crusher', p: '555-555-5552'},
    {n: 'Dr. Jones', p: '555-555-5553'}
  ];

  module.exports = data;
})();
