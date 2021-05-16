[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Portfolio Generator 

This repository contains a portfolio generator that is run through the command line using Node.js. 
The application will append the README to the sample folder.<br> <br> The sample HTML generated using the application can be found in /sample/


### Installation 

1. Make sure you have Node.js to run the application
2. Clone this repo
> HTTPS: `https://github.com/micheqn3/portfolio-generator.git` <br>
> SSH: `git@github.com:micheqn3/portfolio-generator.git`
3. Install the NPM package (inquirer)
> npm install
4. Run the application in command line 
> node index.js
> 
### Command line 

![Command line](/Assets/terminal.png)

### This repository contains: 

  - index.js - This script uses the inquirer package to present to the user a series of questions for their portfolio. The 
  application then retrieves the user's data and generates an HTML file styled with Bootstrap.
  
  Questions asked:
  1. What is your name?
  2. What is your location?
  3. What do you want your bio to be?
  4. Enter your Github username.
  5. Enter your LinkedIn URL.

### Sample generated HTML

![Sample HTML](/Assets/sample-html.png)

### License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT 

