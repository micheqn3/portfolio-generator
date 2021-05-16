const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) => // Function that will pass through answers as parameter 
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <title>Portfolio Generator</title>
    </head>
    <body>
        <div id="portfolio">
  
        </div>
      <div class="jumbotron">
          <div class="container">
              <h1 class="text-center">${answers.name}</h1>
              <h3 class="text-center">Location: ${answers.location}</h3>
              <p class="font-weight-bold text-center">${answers.bio}</p>
              <p class="font-weight-bold text-center">LinkedIn: ${answers.linkedin}</p>
              <p class="font-weight-bold text-center">Github: ${answers.github}</p>
              <div class="col text-center">
                <button type="button" class="btn btn-md btn-info text-center">My Work</button>
              </div>
          </div>
      </div>
      <div class="container contact">
          <form>
            <h1 class="text-center">Contact Form</h1>
            <div class="form-group col-xs-6">
              <label for="name-field">Name</label>
              <input type="text" class="form-control" id="name-field" name="name-field" placeholder="Your name" required>
            </div>
            <div class="form-group col-xs-6">
              <label for="email-field">Email</label>
              <input type="email" class="form-control" id="email-field" name="email-field" placeholder="Email address" required>
            </div>
            <div class="form-group col-xs-12">
              <label for="body-field">Message</label>
              <textarea id="body-field" name="body-field" class="form-control" placeholder="Mesage here..." required></textarea>
            </div>
            <div class="col text-center">
              <button type="submit" class="btn btn-info btn-lg">Submit</button>  
            </div>
          </form>
        </div>
    </body>
  </html>
`;

inquirer // Start inquirer prompts in node
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is your location?',
    },
    {
      type: 'input',
      name: 'bio',
      message: 'What do you want your bio to be?',
    },

    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers); // Save new HTML with answers

    fs.appendFile('./sample/index.html', htmlPageContent, function(error) { // Create new file with HTML content
        if (error) {
            console.log("Failed creating file.")
        } else {
            console.log("File succesfully created.")
        }
    })
  });

