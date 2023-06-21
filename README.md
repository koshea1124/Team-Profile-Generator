# Team Profile Generator

##  Table of Contents
- [Description](#description)
- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Screenshot](#screenshot)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#screenshot)
- [Credits](#credits)

##  Description
Introducing Team Profile Generator, a powerful Node.js command-line application designed to streamline the creation of team summaries for software engineering teams. This innovative app leverages the Inquirer package (version 8.2.4) to capture user input effectively and generate an HTML webpage that displays detailed information about each team member.

With Team Profile Generator, managers can effortlessly generate visually appealing and informative team rosters. The app allows managers to enter the team manager's details, such as their name, employee ID, email address, and office number. It then presents a user-friendly menu to add engineers or interns or to finish building the team. By providing essential information like email addresses and GitHub profiles, Team Profile Generator ensures quick access to team member details. Furthermore, clicking on an email address automatically opens the default email program, while clicking on a GitHub username opens the respective profile in a new tab for seamless collaboration. Once the team is finalized, the application generates an HTML webpage, presenting a beautifully formatted team summary.

Experience the convenience and efficiency of Team Profile Generator, the ultimate tool for effortlessly creating detailed team summaries. Simplify your team management process and save valuable time by generating comprehensive team profiles with this intuitive command-line application.

##  Overview
### The Challenge
The challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

### User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

### Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

##  Technologies
* HTML
* CSS
* Node.js
* NPM
* JavaScript
* JQuery
* Test-Driven Development
* Object Oriented Programming
* Jest
* Inquirer

##  Installation
* Code Cloning: Open your terminal or Gitbash and enter the following command: "git clone paste copied URL here". This will clone the code repository onto your local machine.
* NPM Installation: Ensure you are in the correct project directory, then install NPM by executing the command "npm init -y" in your terminal or Gitbash command line.
* Inquirer Installation: Similarly, while in the correct project directory, install Inquirer by running the command "npm install inquirer@8.2.4" in your terminal or Gitbash command line.
* Jest Setup: For Jest integration, utilize the command "npm install jest --save-dev". Remember to set "jest" as the test value in your package.json file.

##  Usage
To start the program, go to the project directory and initiate it with the command "node index.js" in the integrated terminal of VS Code. Following that, you'll be asked to provide details for the manager. Afterward, you'll be directed to the main menu, where you can choose to add an engineer, add an intern, or exit the application and generate your HTML file.
Once you finish, locate your newly created team HTML profile in the 'dist' subdirectory.

##  Demonstration
Link to youTube video: https://youtu.be/bhxHLyko9r8

##  Screenshot
![image](https://github.com/koshea1124/Team-Profile-Generator/assets/119077249/fae2c3ce-2bac-4415-82a1-65f6a35a1d5e)

##  Contributing
Please reach out via email or thru GitHub if you have any suggestions for imporovement

##  Tests
To run a test, use the command "npm run test file name" to test only one file, or "npm run test" to run all tests at once.

##  Questions
Please feel free to reach out if you have any questions:
* GitHub UserName: https://github.com/koshea1124
* Email: koshea1980@gmail.com

##  License
N/A

##  Credits
* [NPM Install](https://docs.npmjs.com/cli/v6/commands/npm-init)
* [NPM Inquirer](https://www.npmjs.com/package/inquirer)
* [Code Academy](https://www.codecademy.com/catalog)
* [Markdown Crash Course Video](https://www.youtube.com/watch?v=HUBNt18RFbo)
* [MDN Docs](https://developer.mozilla.org/en-US/)
* [Jest](https://jestjs.io/docs/getting-started)

