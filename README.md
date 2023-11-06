<h1 align="center">node.js README Generator </h1>
 
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-screencastify-blue" />
    <img src="https://img.shields.io/badge/-jest-orange" />
</p>

## Description

🪧 This is a node.js app that accepts user input to write create a SVG image file.

⬇️ The raw file containing a full movie demonstrating funcationality can be downloaded here ⬇️

[Movie](src/video.webm)  

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
💿 To run the application, open index.js in the terminal and enter the following commands.

`npm init`

`npm install inquirer@8.2.4`

🧪 To test the application, open shapes.test.js in the terminal and enter the following command:

`npx jest`

## Usage
🖥️   

To utilize the application, open index.js in the terminal and enter the following command, then follow the prompts:

`node index.js`

## Contributors
[Christopher Stasney](https://github.com/cstasney)

## Questions
📧 Please reach out with any questions or concerns: [E-mail](mailto:cstasney07@gmail.com) , [GitHub](https://github.com/cstasney)<br />


